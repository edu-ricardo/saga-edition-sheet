import type { Character } from '../../types';
import { CLASSES } from '../../data/rules';
import { getAbilityModifier } from '../../utils/rulesEngine';

export function SkillsStep(character: Character, onNext: () => void, onBack: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    // Logic: Max Skills = Class Start Skills + Int Mod + (Human ? 1 : 0)
    let maxSkills = 0;
    let availableSkills: string[] = [];

    if (character.classes.length > 0) {
        const cls = CLASSES[character.classes[0].className];
        const intMod = getAbilityModifier(character.abilities.int);

        maxSkills = (cls.startSkills || 0) + intMod;

        if (character.species === 'Human') {
            maxSkills += 1;
        }

        availableSkills = cls.classSkills;
    }

    if (maxSkills < 1) maxSkills = 1;

    container.innerHTML = `
        <h3>Step 4: Trained Skills</h3>
        <p class="mb-4">Select <strong><span id="skills-count">0</span> / ${maxSkills}</strong> trained skills.</p>
        
        <div class="skills-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.5rem;">
            ${availableSkills.map(skill => `
                <label class="skill-item card" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; cursor: pointer;">
                    <input type="checkbox" value="${skill}" ${character.skills.includes(skill) ? 'checked' : ''}>
                    ${skill}
                </label>
            `).join('')}
        </div>
        
        <div class="actions">
            <button id="prev-btn">Back</button>
            <button id="next-step-btn" disabled>Next: Feats & Talents</button>
        </div>
    `;

    const checkboxes = container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    const countDisplay = container.querySelector<HTMLSpanElement>('#skills-count');
    const nextBtn = container.querySelector<HTMLButtonElement>('#next-step-btn');
    const prevBtn = container.querySelector<HTMLButtonElement>('#prev-btn');

    const updateState = () => {
        const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        character.skills = selected;

        if (countDisplay) countDisplay.textContent = selected.length.toString();

        checkboxes.forEach(cb => {
            if (!cb.checked && selected.length >= maxSkills) {
                cb.disabled = true;
            } else {
                cb.disabled = false;
            }
        });

        if (nextBtn) {
            const forcedMax = Math.min(maxSkills, availableSkills.length);
            if (selected.length === forcedMax) {
                nextBtn.disabled = false;
                nextBtn.classList.add('primary');
            } else {
                nextBtn.disabled = true;
                nextBtn.classList.remove('primary');
            }
        }
    };

    checkboxes.forEach(cb => cb.addEventListener('change', updateState));

    // Initial Update
    updateState();

    nextBtn?.addEventListener('click', () => onNext());
    prevBtn?.addEventListener('click', () => onBack());

    return container;
}
