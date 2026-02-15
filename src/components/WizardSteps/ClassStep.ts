import { CLASSES } from '../../data/rules';
import type { Character } from '../../types';

export function ClassStep(character: Character, onNext: () => void, onBack: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    // If no classes selected, init empty array
    if (!character.classes) character.classes = [];

    const render = () => {
        const totalLevel = character.classes.reduce((sum, c) => sum + c.level, 0);

        container.innerHTML = `
            <h3>Step 2: Class & Level</h3>
            <p class="mb-4">Manage your class levels. <strong>Total Level: ${totalLevel}</strong></p>

            <div class="card" style="margin-bottom: 1rem; padding: 1rem;">
                <h4>Current Classes</h4>
                <div id="class-list">
                    ${character.classes.map((cls, idx) => `
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 0.5rem 0;">
                            <span><strong>${cls.className}</strong> (Level ${cls.level})</span>
                            <div style="display: flex; gap: 0.5rem;">
                                <button class="level-btn" data-idx="${idx}" data-action="inc" style="padding: 0.2rem 0.5rem;">+</button>
                                <button class="level-btn" data-idx="${idx}" data-action="dec" style="padding: 0.2rem 0.5rem;" ${cls.level <= 1 ? 'disabled' : ''}>-</button>
                                <button class="remove-btn" data-idx="${idx}" style="padding: 0.2rem 0.5rem; background-color: #ffebee; color: red; border-color: red;">Remove</button>
                            </div>
                        </div>
                    `).join('')}
                    ${character.classes.length === 0 ? '<p style="color: #666;">No classes selected.</p>' : ''}
                </div>
            </div>

            <div class="form-group" style="border: 1px solid #ddd; padding: 1rem; border-radius: 4px;">
                <label>Add New Class</label>
                <div style="display: flex; gap: 1rem;">
                    <select id="new-class-select" style="flex: 1;">
                        <option value="">Select a class...</option>
                        ${renderClassOptions(character)}
                    </select>
                    <button id="add-class-btn" disabled>Add Class</button>
                </div>
                <div id="class-preview" style="margin-top: 0.5rem; font-size: 0.9em; color: #666;"></div>
            </div>
            
            <div class="actions">
                <button id="prev-btn">Back</button>
                <button id="next-step-btn" ${character.classes.length > 0 ? '' : 'disabled'}>Next: Abilities</button>
            </div>
        `;

        // Event Listeners
        container.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt((e.target as HTMLElement).dataset.idx || '0');
                const action = (e.target as HTMLElement).dataset.action;
                if (action === 'inc') character.classes[idx].level++;
                if (action === 'dec' && character.classes[idx].level > 1) character.classes[idx].level--;
                render();
            });
        });

        container.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt((e.target as HTMLElement).dataset.idx || '0');
                character.classes.splice(idx, 1);
                render();
            });
        });

        const addBtn = container.querySelector<HTMLButtonElement>('#add-class-btn');
        const select = container.querySelector<HTMLSelectElement>('#new-class-select');
        const preview = container.querySelector<HTMLDivElement>('#class-preview');
        const nextBtn = container.querySelector<HTMLButtonElement>('#next-step-btn');
        const prevBtn = container.querySelector<HTMLButtonElement>('#prev-btn');

        if (select) {
            select.addEventListener('change', () => {
                const clsName = select.value;
                if (clsName && addBtn && preview) {
                    addBtn.disabled = false;
                    const cls = CLASSES[clsName];
                    preview.innerHTML = `
                        <strong>${cls.name}</strong> (${cls.isPrestige ? 'Prestige' : 'Base Class'})<br>
                        HP/Level: d${cls.hpPerLevel}<br>
                        Defenses: Ref +${cls.defenseBonuses.reflex || 0}, Fort +${cls.defenseBonuses.fortitude || 0}, Will +${cls.defenseBonuses.will || 0}
                    `;
                } else if (addBtn) {
                    addBtn.disabled = true;
                    if (preview) preview.innerHTML = '';
                }
            });
        }

        if (addBtn && select) {
            addBtn.addEventListener('click', () => {
                if (select.value) {
                    character.classes.push({ className: select.value, level: 1 });
                    render();
                }
            });
        }

        nextBtn?.addEventListener('click', () => onNext());
        prevBtn?.addEventListener('click', () => onBack());
    };

    render();
    return container;
}

function renderClassOptions(character: Character): string {
    // Filter classes
    // Base classes are always available.
    // Prestige classes are available if prereqs met (mock check for now).

    return Object.keys(CLASSES).map(key => {
        const cls = CLASSES[key];
        let disabled = false;
        let label = cls.name;

        if (cls.isPrestige) {
            // Check prereqs (Simplified)
            // Example: Jedi Knight requires Base Attack Bonus +7.
            // Since we haven't calculated BAB fully here yet (it's in rulesEngine), let's approximate or allow freely for this step but warn?
            // User requested "Apply rules".
            // Let's check Level >= 7 for transparency.
            const totalLevel = character.classes.reduce((sum, c) => sum + c.level, 0);
            if (cls.prerequisites && cls.prerequisites.level && totalLevel < cls.prerequisites.level) {
                disabled = true;
                label += ` (Req Lvl ${cls.prerequisites.level})`;
            }
        }

        return `<option value="${key}" ${disabled ? 'disabled' : ''}>${label}</option>`;
    }).join('');
}
