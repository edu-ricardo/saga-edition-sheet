import { SPECIES } from '../../data/rules';
import type { Character } from '../../types';

export function SpeciesStep(character: Character, onNext: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    container.innerHTML = `
        <h3>Step 1: Choose Species</h3>
        <p class="mb-4">Select a species to see its traits and ability modifiers.</p>
        <div class="form-group">
            <label for="species-select">Species</label>
            <select id="species-select">
                <option value="">Select a species...</option>
                ${Object.keys(SPECIES).map(key => `<option value="${key}">${SPECIES[key].name}</option>`).join('')}
            </select>
        </div>
        <div id="species-details" class="card" style="display:none; padding: 1rem; margin-bottom: 1rem;"></div>
        
        <div class="actions">
            <button id="next-step-btn" disabled>Next: Class</button>
        </div>
    `;

    const select = container.querySelector<HTMLSelectElement>('#species-select');
    const nextBtn = container.querySelector<HTMLButtonElement>('#next-step-btn');
    const details = container.querySelector<HTMLDivElement>('#species-details');

    // Pre-select if already chosen
    if (character.species && select) {
        select.value = character.species;
        renderDetails(character.species, details, nextBtn);
    }

    select?.addEventListener('change', (e) => {
        const speciesName = (e.target as HTMLSelectElement).value;
        character.species = speciesName;
        renderDetails(speciesName, details, nextBtn);
    });

    nextBtn?.addEventListener('click', () => {
        if (character.species) {
            onNext();
        }
    });

    return container;
}

function renderDetails(speciesName: string, container: HTMLElement | null, nextBtn: HTMLButtonElement | null) {
    if (!container || !nextBtn) return;

    if (speciesName && SPECIES[speciesName]) {
        const s = SPECIES[speciesName];
        let mods = Object.entries(s.abilityMods).map(([stat, val]) => `${stat.toUpperCase()} ${val > 0 ? '+' : ''}${val}`).join(', ');
        if (!mods) mods = "None";

        container.style.display = 'block';
        container.innerHTML = `
            <h4>${s.name}</h4>
            <p><strong>Ability Modifiers:</strong> ${mods}</p>
            <p><strong>Size:</strong> ${s.size}</p>
            <p><strong>Speed:</strong> ${s.speed} squares</p>
            <p><strong>Traits:</strong> ${s.traits.join(', ')}</p>
            <p><strong>Languages:</strong> ${s.languages.join(', ')}</p>
        `;
        nextBtn.disabled = false;
        nextBtn.classList.add('primary');
    } else {
        container.style.display = 'none';
        nextBtn.disabled = true;
        nextBtn.classList.remove('primary');
    }
}
