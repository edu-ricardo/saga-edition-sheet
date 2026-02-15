import { CLASSES } from '../../data/rules';
import type { Character } from '../../types';
import { checkPrerequisites, getMaxHp } from '../../utils/rulesEngine';

export function ClassStep(character: Character, onNext: () => void, onBack: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    // If no classes selected, init empty array
    if (!character.classes) character.classes = [];

    const render = () => {
        const totalLevel = character.classes.reduce((sum, c) => sum + c.level, 0);
        // Calculate estimated HP (based on current CON)
        const estimatedHp = getMaxHp(character);

        container.innerHTML = `
            <h3>Step 2: Class & Level</h3>
            <p>Total Character Level: <strong>${totalLevel}</strong></p>
            <p>Estimated HP: <strong>${estimatedHp}</strong> <span class="text-muted" style="font-size: 0.8em;">(Calculated with current Con)</span></p>

            <div class="current-classes card" style="margin-bottom: 2rem;">
                <h4>Your Classes</h4>
                ${character.classes.length === 0 ? '<p>No classes selected yet.</p>' : ''}
                <ul class="class-list">
                    ${character.classes.map((c, idx) => {
            const clsConfig = CLASSES[c.className];
            return `
                        <li class="class-item">
                            <span class="class-name"><strong>${c.className}</strong> (Lv ${c.level})</span>
                            <div class="level-controls">
                                <button class="level-btn" data-action="dec" data-idx="${idx}">-</button>
                                <span class="level-val">${c.level}</span>
                                <button class="level-btn" data-action="inc" data-idx="${idx}">+</button>
                                <button class="delete-class-btn" data-idx="${idx}" style="margin-left: 10px; color: red;">&times;</button>
                            </div>
                            <div class="class-details" style="font-size: 0.8em; color: #666; margin-top: 5px;">
                                HP/Level: d${clsConfig.hpPerLevel} | BAB: ${clsConfig.babProgression === 1 ? '1:1' : '3:4'}
                            </div>
                        </li>
                    `}).join('')}
                </ul>
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

        container.querySelectorAll('.delete-class-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt((e.target as HTMLElement).dataset.idx || '0');
                if (confirm('Are you sure you want to remove this class?')) {
                    character.classes.splice(idx, 1);
                    render();
                }
            });
        });

        const addBtn = container.querySelector('#add-class-btn') as HTMLButtonElement;
        const select = container.querySelector('#new-class-select') as HTMLSelectElement;
        const preview = container.querySelector('#class-preview') as HTMLElement;
        const nextBtn = container.querySelector('#next-step-btn') as HTMLButtonElement;
        const prevBtn = container.querySelector('#prev-btn') as HTMLButtonElement;

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
    return Object.keys(CLASSES).map(key => {
        const cls = CLASSES[key];
        let disabled = false;
        let label = cls.name;
        let title = '';

        // If it's a Prestige class, check prerequisites
        if (cls.isPrestige) {
            const check = checkPrerequisites(character, cls);
            if (!check.eligible) {
                disabled = true;
                label += ` (Locked)`;
                title = `Requirements not met:\n- ${check.reasons.join('\n- ')}`;
            }
        }

        return `<option value="${key}" ${disabled ? 'disabled' : ''} title="${title}">${label}</option>`;
    }).join('');
}
