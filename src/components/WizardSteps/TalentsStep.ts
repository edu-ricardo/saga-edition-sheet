import type { Character, Talent } from '../../types';
import { TALENTS } from '../../data/rules';
import { getAvailableTalents } from '../../utils/rulesEngine';

export function TalentsStep(character: Character, onNext: () => void, onBack: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    // Determine available classes
    const charClasses = character.classes.map(c => c.className);

    // Filter talents by character classes
    const availableTalents = TALENTS.filter(t => charClasses.includes(t.class));

    // Group by Class -> Tree
    const talentsByTree: Record<string, Record<string, Talent[]>> = {};

    availableTalents.forEach(t => {
        if (!talentsByTree[t.class]) {
            talentsByTree[t.class] = {};
        }
        if (!talentsByTree[t.class][t.tree]) {
            talentsByTree[t.class][t.tree] = [];
        }
        talentsByTree[t.class][t.tree].push(t);
    });

    // Determine number of talents to select
    const slots = getAvailableTalents(character);

    // Use a Set for selected talents to handle easy add/remove
    const selectedTalents = new Set<string>(character.talents || []);

    container.innerHTML = `
        <h3>Select Talents</h3>
        <p class="mb-4">You have <strong><span id="talents-count">${selectedTalents.size}</span> / ${slots}</strong> talents to select.</p>
        
        <div class="form-group">
            <input type="text" id="talent-search" placeholder="Search talents..." style="margin-bottom: 0.5rem; width: 100%; padding: 0.5rem;">
        </div>

        <div id="talents-list" style="max-height: 500px; overflow-y: auto;">
            <!-- Tree content goes here -->
        </div>

        <div class="actions">
            <button id="prev-btn">Back</button>
            <button id="next-step-btn" disabled>Next: Equipment</button>
        </div>
    `;

    const listContainer = container.querySelector('#talents-list') as HTMLElement;
    const countDisplay = container.querySelector('#talents-count') as HTMLElement;
    const nextBtn = container.querySelector('#next-step-btn') as HTMLButtonElement;
    const prevBtn = container.querySelector('#prev-btn') as HTMLButtonElement;
    const searchInput = container.querySelector('#talent-search') as HTMLInputElement;

    function renderList(filterText = '') {
        listContainer.innerHTML = '';
        const lowerFilter = filterText.toLowerCase();

        Object.keys(talentsByTree).forEach(className => {
            const trees = talentsByTree[className];
            const classHeader = document.createElement('h4');
            classHeader.textContent = className;
            classHeader.style.marginTop = '1rem';
            classHeader.style.borderBottom = '1px solid #444';

            let hasVisibleClassTalents = false;
            const treeKeyElements: HTMLElement[] = [];

            Object.keys(trees).forEach(treeName => {
                const talents = trees[treeName].filter(t =>
                    t.name.toLowerCase().includes(lowerFilter) ||
                    t.description.toLowerCase().includes(lowerFilter)
                );

                if (talents.length === 0) return;

                hasVisibleClassTalents = true;

                const treeContainer = document.createElement('div');
                treeContainer.className = 'talent-tree';
                treeContainer.style.marginBottom = '1rem';

                treeContainer.innerHTML = `<h5 style="color: #ccc; margin: 0.5rem 0;">${treeName}</h5>`;

                const grid = document.createElement('div');
                grid.style.display = 'grid';
                grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
                grid.style.gap = '0.5rem';

                talents.forEach(t => {
                    const isSelected = selectedTalents.has(t.name);
                    const label = document.createElement('label');
                    label.className = `talent-item card ${isSelected ? 'selected' : ''}`;
                    label.style.cursor = 'pointer';
                    label.style.display = 'block';
                    label.style.padding = '0.5rem';

                    label.innerHTML = `
                        <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
                            <input type="checkbox" value="${t.name}" ${isSelected ? 'checked' : ''}>
                            ${t.name}
                        </div>
                        <div style="font-size: 0.85em; color: #aaa; margin-top: 4px;">${t.description}</div>
                        ${t.prerequisites ? `<div style="font-size: 0.8em; color: #e57373;">Prereq: ${t.prerequisites}</div>` : ''}
                        <div style="font-size: 0.75em; color: #666; text-align: right;">${t.source}</div>
                    `;

                    const checkbox = label.querySelector('input') as HTMLInputElement;
                    checkbox.addEventListener('change', () => {
                        if (checkbox.checked) {
                            if (selectedTalents.size < slots) {
                                selectedTalents.add(t.name);
                            } else {
                                checkbox.checked = false; // Prevent selection if full
                                // Optionally show toast "Max talents selected"
                            }
                        } else {
                            selectedTalents.delete(t.name);
                        }
                        updateState();
                    });

                    grid.appendChild(label);
                });

                treeContainer.appendChild(grid);
                treeKeyElements.push(treeContainer);
            });

            if (hasVisibleClassTalents) {
                listContainer.appendChild(classHeader);
                treeKeyElements.forEach(el => listContainer.appendChild(el));
            }
        });
    }

    function updateState() {
        if (countDisplay) countDisplay.textContent = selectedTalents.size.toString();

        // Update check state in UI if needed (re-render not necessary unless filtering changed)
        // But for "disabled" state when full, we might want to Iterate.
        // For simplicity, we just enforce the limit in the click handler.

        // Character update
        character.talents = Array.from(selectedTalents);

        // Next button always enabled? Or only if slots filled?
        // Let's enforce filling slots for Level 1.
        if (selectedTalents.size === slots) {
            nextBtn.disabled = false;
            nextBtn.textContent = "Next: Equipment";
            nextBtn.classList.add('primary');
        } else {
            nextBtn.disabled = true;
            nextBtn.textContent = `Select ${slots - selectedTalents.size} more`;
            nextBtn.classList.remove('primary');
        }
    }

    searchInput.addEventListener('input', () => {
        renderList(searchInput.value);
    });

    prevBtn.addEventListener('click', onBack);
    nextBtn.addEventListener('click', onNext);

    renderList();
    updateState();

    return container;
}
