import type { Character } from '../../types';
import { FEATS, CLASSES } from '../../data/rules';

export function FeatsStep(character: Character, onNext: () => void, onBack: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    // Calculate selectable feats
    // Level 1 Character gets 1 General Feat.
    // Humans get +1 Bonus Feat.
    // Some classes give bonus feats? (Jedi, Soldier etc get Starting Feats, but those are automatic).
    // Condition: Starship Tactics (requires Pilot trained), etc.

    let availableFeatSlots = 1; // General Feat at level 1
    if (character.species === 'Human') availableFeatSlots += 1;

    // Filter feats: Don't show already possessed feats (from Class Starting Feats)
    let startingFeats: string[] = [];
    if (character.classes.length > 0) {
        const cls = CLASSES[character.classes[0].className];
        if (cls && cls.startFeats) {
            startingFeats = cls.startFeats;
        }
    }

    // Current character feats might already include starting feats if we added them in ClassStep (we didn't explicitly push them to character.feats yet, we just set classes)
    // Let's assume character.feats only holds *selected* feats for now.

    container.innerHTML = `
        <h3>Step 5: Select Feats</h3>
        <p class="mb-4">You have <strong><span id="feats-count">0</span> / ${availableFeatSlots}</strong> feats to select.</p>
        <p class="text-small mb-4">Starting Class Feats: ${startingFeats.join(', ')}</p>
        
        <div class="form-group">
            <input type="text" id="feat-search" placeholder="Search feats..." style="margin-bottom: 0.5rem;">
        </div>

        <div class="skills-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem; max-height: 400px; overflow-y: auto;">
            ${FEATS.map(feat => {
        const isStarting = startingFeats.includes(feat.name);
        const isSelected = character.feats.includes(feat.name);
        return `
                <label class="skill-item card ${isStarting ? 'disabled' : ''}" style="display: flex; flex-direction: column; padding: 0.5rem; cursor: pointer; opacity: ${isStarting ? 0.7 : 1};">
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
                        <input type="checkbox" value="${feat.name}" ${isSelected || isStarting ? 'checked' : ''} ${isStarting ? 'disabled' : ''}>
                        ${feat.name}
                    </div>
                    <div style="font-size: 0.85em; color: #666; margin-top: 4px;">${feat.description}</div>
                </label>
            `}).join('')}
        </div>
        
        <div class="actions">
            <button id="prev-btn">Back</button>
            <button id="next-step-btn" disabled>Next: Summary</button>
        </div>
    `;

    const checkboxes = container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:not(:disabled)');
    const countDisplay = container.querySelector<HTMLSpanElement>('#feats-count');
    const nextBtn = container.querySelector<HTMLButtonElement>('#next-step-btn');
    const prevBtn = container.querySelector<HTMLButtonElement>('#prev-btn');
    const searchInput = container.querySelector<HTMLInputElement>('#feat-search');

    const updateState = () => {
        const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        // We only save the *selected* feats to character.feats. Starting feats are implicit or should be merged at the end.
        // Or we merge them now? Let's keep them separate in logic but merge in data?
        // Let's save ONLY selected feats here.
        character.feats = selected;

        if (countDisplay) countDisplay.textContent = selected.length.toString();

        checkboxes.forEach(cb => {
            if (!cb.checked && selected.length >= availableFeatSlots) {
                cb.disabled = true;
            } else {
                cb.disabled = false;
            }
        });

        if (nextBtn) {
            if (selected.length === availableFeatSlots) {
                nextBtn.disabled = false;
                nextBtn.classList.add('primary');
            } else {
                nextBtn.disabled = true;
                nextBtn.classList.remove('primary');
            }
        }
    };

    checkboxes.forEach(cb => cb.addEventListener('change', updateState));

    searchInput?.addEventListener('input', (e) => {
        const term = (e.target as HTMLInputElement).value.toLowerCase();
        const labels = container.querySelectorAll('.skill-item');
        labels.forEach(label => {
            const text = label.textContent?.toLowerCase() || '';
            (label as HTMLElement).style.display = text.includes(term) ? 'flex' : 'none';
        });
    });

    updateState();

    nextBtn?.addEventListener('click', () => onNext());
    prevBtn?.addEventListener('click', () => onBack());

    return container;
}
