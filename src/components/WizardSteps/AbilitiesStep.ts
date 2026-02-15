import type { Character, AbilityScores } from '../../types';
import { getAbilityModifier, getMaxAbilityBoosts } from '../../utils/rulesEngine';
import { SPECIES } from '../../data/rules';
import { Toast } from '../Toast'; // Assuming Toast is available
// import { Modal } from '../Modal'; // Unused in this file for now

type GenMethod = 'point-buy' | 'standard-array' | 'rolling';

export function AbilitiesStep(character: Character, onNext: () => void, onBack: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    // State
    let method: GenMethod = 'point-buy';
    let baseScores: AbilityScores = { ...character.abilities };
    let rolledPool: number[] = [];
    let assignedRolls: Record<keyof AbilityScores, number | null> = {
        str: null, dex: null, con: null, int: null, wis: null, cha: null
    };
    let rerollOnes: boolean = false;

    // Config
    const COST_TABLE: Record<number, number> = {
        8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 6, 15: 8, 16: 10, 17: 13, 18: 16
    };
    const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];
    const AVAILABLE_POINTS = 25;
    const ABILITIES: (keyof AbilityScores)[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

    const species = SPECIES[character.species];
    const mods = species ? species.abilityMods : {};

    // Init ability boosts if needed
    if (!character.abilityBoosts) character.abilityBoosts = {};

    // Helper: Roll 4d6 drop lowest
    const rollDie = (): number => {
        let val = Math.floor(Math.random() * 6) + 1;
        if (rerollOnes && val === 1) return rollDie();
        return val;
    }

    const rollStat = () => {
        const rolls = Array.from({ length: 4 }, rollDie);
        rolls.sort((a, b) => a - b);
        return rolls.slice(1).reduce((a, b) => a + b, 0);
    };

    // Helper: Get total level boosts for a stat
    const getLevelBoost = (stat: keyof AbilityScores): number => {
        let boost = 0;
        if (character.abilityBoosts) {
            Object.values(character.abilityBoosts).forEach(boosts => {
                if (boosts.includes(stat)) boost += 1;
            });
        }
        return boost;
    };

    // Initialize logic
    const init = () => {
        if (method === 'point-buy') {
            ABILITIES.forEach(stat => {
                if (baseScores[stat] < 8) baseScores[stat] = 8;
                if (baseScores[stat] > 18) baseScores[stat] = 18;
            });
        }
    };

    const render = () => {
        container.innerHTML = `
            <h3>Step 3: Ability Scores</h3>
            <div class="form-group">
                <label>Generation Method</label>
                <select id="gen-method">
                    <option value="point-buy" ${method === 'point-buy' ? 'selected' : ''}>Point Buy (25 Points)</option>
                    <option value="standard-array" ${method === 'standard-array' ? 'selected' : ''}>Standard Array (15, 14, 13, 12, 10, 8)</option>
                    <option value="rolling" ${method === 'rolling' ? 'selected' : ''}>Rolling (4d6 Drop Lowest)</option>
                </select>
            </div>

            <div id="method-content"></div>
            
            <div id="level-boosts-content" style="margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1rem;"></div>

            <div class="actions">
                <button id="prev-btn">Back</button>
                <button id="next-step-btn" class="primary">Next: Skills</button>
            </div>
        `;

        const content = container.querySelector('#method-content') as HTMLElement;
        const boostsContent = container.querySelector('#level-boosts-content') as HTMLElement;
        const methodSelect = container.querySelector('#gen-method') as HTMLSelectElement;

        methodSelect.addEventListener('change', (e) => {
            method = (e.target as HTMLSelectElement).value as GenMethod;
            if (method === 'rolling') rolledPool = [];
            if (method === 'standard-array') rolledPool = [...STANDARD_ARRAY];
            // Reset assignments when switching methods
            ABILITIES.forEach(k => assignedRolls[k] = null);
            render();
        });

        if (method === 'point-buy') renderPointBuy(content);
        else if (method === 'standard-array') renderAssignment(content, 'Standard Array');
        else if (method === 'rolling') renderRolling(content);

        // Render Level Boosts
        renderLevelBoosts(boostsContent);

        container.querySelector('#next-step-btn')?.addEventListener('click', () => {
            if (method === 'rolling' || method === 'standard-array') {
                const unassigned = ABILITIES.some(stat => assignedRolls[stat] === null);
                if (unassigned) {
                    Toast.show('Please assign a value to all abilities.', 'error');
                    return;
                }
                ABILITIES.forEach(stat => {
                    character.abilities[stat] = (assignedRolls[stat] || 10) + (mods[stat] || 0) + getLevelBoost(stat);
                });
            } else {
                ABILITIES.forEach(stat => {
                    character.abilities[stat] = baseScores[stat] + (mods[stat] || 0) + getLevelBoost(stat);
                });
            }
            onNext();
        });

        container.querySelector('#prev-btn')?.addEventListener('click', onBack);
    };

    const renderLevelBoosts = (parent: HTMLElement) => {
        const maxBoosts = getMaxAbilityBoosts(character);
        if (maxBoosts <= 0) return;

        parent.innerHTML = `
            <h4>Level Up Bonuses</h4>
            <p>You have reached levels that grant Ability Score Increases (Levels 4, 8, 12, 16, 20).
            At each milestone, choose two <strong>different</strong> ability scores to increase by 1.</p>
            <div id="boosts-container" style="display: flex; flex-direction: column; gap: 0.5rem;"></div>
        `;

        const containerDiv = parent.querySelector('#boosts-container') as HTMLElement;

        for (let i = 1; i <= maxBoosts; i++) {
            const level = i * 4;
            const boosts = character.abilityBoosts?.[level] || [];
            const stat1 = boosts[0] || '';
            const stat2 = boosts[1] || '';

            const row = document.createElement('div');
            row.className = 'card';
            row.style.padding = '0.5rem';
            row.style.display = 'flex';
            row.style.alignItems = 'center';
            row.style.gap = '1rem';

            row.innerHTML = `
                <strong style="width: 80px;">Level ${level}:</strong>
                <select class="boost-select" data-level="${level}" data-index="0">
                    <option value="">- Select -</option>
                    ${ABILITIES.map(a => `<option value="${a}" ${stat1 === a ? 'selected' : ''}>${a.toUpperCase()}</option>`).join('')}
                </select>
                <span>&</span>
                <select class="boost-select" data-level="${level}" data-index="1">
                     <option value="">- Select -</option>
                    ${ABILITIES.map(a => `<option value="${a}" ${stat2 === a ? 'selected' : ''}>${a.toUpperCase()}</option>`).join('')}
                </select>
            `;

            containerDiv.appendChild(row);
        }

        parent.querySelectorAll('.boost-select').forEach(select => {
            select.addEventListener('change', (e) => {
                const target = e.target as HTMLSelectElement;
                const level = parseInt(target.dataset.level || '0');
                const index = parseInt(target.dataset.index || '0');
                const val = target.value as keyof AbilityScores | '';

                if (!character.abilityBoosts) character.abilityBoosts = {};
                if (!character.abilityBoosts[level]) character.abilityBoosts[level] = [];

                const current = [...(character.abilityBoosts[level] || [])];

                // Ensure array has 2 slots
                if (current.length < 2) current.length = 2;

                current[index] = val as any;

                // Validation: Cannot pick same stat twice in same level
                const otherIndex = index === 0 ? 1 : 0;
                if (val && current[otherIndex] === val) {
                    Toast.show("You must select two different abilities.", 'error');
                    target.value = ''; // Reset
                    current[index] = undefined as any;
                }

                character.abilityBoosts[level] = current.filter(Boolean) as (keyof AbilityScores)[];
                render();
            });
        });
    };

    const renderPointBuy = (parent: HTMLElement) => {
        const pointsSpent = Object.values(baseScores).reduce((sum, val) => sum + (COST_TABLE[val] || 0), 0);

        parent.innerHTML = `
            <p class="mb-4">
                <strong>Point Buy:</strong> Start at 8. Max 18. Total points: 25.
            </p>
             <div class="card" style="margin-bottom: 1rem; padding: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <strong class="${pointsSpent > AVAILABLE_POINTS ? 'text-danger' : ''}">Points Spent: ${pointsSpent} / ${AVAILABLE_POINTS}</strong>
                    <button id="reset-pb-btn" style="font-size: 0.8em;">Reset to 8s</button>
                </div>
                
                <div class="abilities-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; gap: 0.5rem; text-align: center; font-weight: bold;">
                    <div>Ability</div>
                    <div>Base</div>
                    <div>Species</div>
                    <div>Level</div>
                    <div>Final</div>
                    <div>Mod</div>
                    
                    ${ABILITIES.map(key => {
            const val = baseScores[key];
            const mod = mods[key] || 0;
            const levelBoost = getLevelBoost(key);
            const final = val + mod + levelBoost;
            const abilityMod = getAbilityModifier(final);

            return `
                        <div style="text-transform: capitalize; align-self: center;">${key}</div>
                        <div>
                             <input type="number" class="pb-input" data-stat="${key}" value="${val}" min="8" max="18" style="width: 50px; text-align: center;">
                             <div class="text-muted" style="font-size: 0.7em;">Cost: ${COST_TABLE[val]}</div>
                        </div>
                        <div style="align-self: center;">${mod > 0 ? '+' : ''}${mod}</div>
                         <div style="align-self: center; color: #2ecc71;">${levelBoost > 0 ? '+' : ''}${levelBoost}</div>
                        <div class="text-accent" style="align-self: center;">${final}</div>
                        <div style="align-self: center;">${abilityMod >= 0 ? '+' : ''}${abilityMod}</div>
                        `;
        }).join('')}
                </div>
            </div>
        `;

        parent.querySelectorAll('.pb-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const target = e.target as HTMLInputElement;
                const stat = target.dataset.stat as keyof AbilityScores;
                let val = parseInt(target.value);
                if (val < 8) val = 8;
                if (val > 18) val = 18;
                baseScores[stat] = val;
                render();
            });
        });

        parent.querySelector('#reset-pb-btn')?.addEventListener('click', () => {
            ABILITIES.forEach(stat => baseScores[stat] = 8);
            render();
        });
    };

    const renderRolling = (parent: HTMLElement) => {
        parent.innerHTML = `
            <div class="card mb-4">
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem; align-items: center; flex-wrap: wrap;">
                    <button id="roll-btn" class="primary">Roll 4d6 (x6)</button>
                    <button id="manual-btn">Manual Input</button>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" id="reroll-ones" ${rerollOnes ? 'checked' : ''}>
                        Reroll 1s
                    </label>
                </div>
                <div id="dice-pool" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${rolledPool.length > 0 ? rolledPool.map((v) => `<div class="die-val" style="padding: 0.5rem; background: #eee; border-radius: 4px; font-weight: bold; color: #333;">${v}</div>`).join('') : '<em>No rolls yet.</em>'}
                </div>
            </div>
        `;

        if (rolledPool.length === 6) {
            const assignDiv = document.createElement('div');
            renderAssignment(assignDiv, 'Assign Rolls');
            parent.appendChild(assignDiv);
        }

        parent.querySelector('#roll-btn')?.addEventListener('click', () => {
            rolledPool = Array.from({ length: 6 }, rollStat);
            ABILITIES.forEach(k => assignedRolls[k] = null);
            render(); // Re-render whole step to update pool and clear assignments
        });

        parent.querySelector('#reroll-ones')?.addEventListener('change', (e) => {
            rerollOnes = (e.target as HTMLInputElement).checked;
        });

        if (rolledPool.length === 0) {
            parent.querySelector('#manual-btn')?.addEventListener('click', () => {
                // Show manual input UI
                parent.innerHTML = `
                   <div class="card mb-4">
                       <h3>Manual Input</h3>
                       <p>Enter your 6 rolled values below:</p>
                       <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem;">
                           ${Array.from({ length: 6 }).map(() => `
                               <input type="number" class="manual-roll-input" min="3" max="18" style="width: 50px; text-align: center; padding: 0.5rem;" placeholder="-">
                           `).join('')}
                       </div>
                       <div class="actions" style="justify-content: center; gap: 1rem;">
                           <button id="cancel-manual-btn">Cancel</button>
                           <button id="confirm-manual-btn" class="primary">Use Values</button>
                       </div>
                   </div>
               `;

                parent.querySelector('#cancel-manual-btn')?.addEventListener('click', () => render());
                parent.querySelector('#confirm-manual-btn')?.addEventListener('click', () => {
                    const inputs = parent.querySelectorAll('.manual-roll-input');
                    const values: number[] = [];
                    let valid = true;
                    inputs.forEach((input) => {
                        const val = parseInt((input as HTMLInputElement).value);
                        if (isNaN(val) || val < 3 || val > 18) valid = false;
                        values.push(val);
                    });

                    if (valid && values.length === 6) {
                        rolledPool = values;
                        ABILITIES.forEach(k => assignedRolls[k] = null);
                        render();
                    } else {
                        Toast.show("Please enter 6 valid numbers (3-18).", 'error');
                    }
                });
            });
        }
    };

    const renderAssignment = (parent: HTMLElement, title: string) => {
        const containerDiv = document.createElement('div');

        containerDiv.innerHTML = `
             <p><strong>${title}:</strong> Assign values to your abilities.</p>
             <div class="card">
                <div class="abilities-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; gap: 0.5rem; text-align: center; font-weight: bold;">
                    <div>Ability</div>
                    <div>Value</div>
                    <div>Species</div>
                    <div>Level</div>
                    <div>Final</div>
                    <div>Mod</div>
                </div>
            </div>
        `;

        const grid = containerDiv.querySelector('.abilities-grid');

        ABILITIES.forEach(key => {
            const val = assignedRolls[key];
            const mod = mods[key] || 0;
            const levelBoost = getLevelBoost(key);
            const final = (val || 10) + mod + levelBoost;
            const abilityMod = getAbilityModifier(final);

            // Calculate available values for this row
            // We count occurrences in pool, subtract assignments used elsewhere
            const used = Object.values(assignedRolls).filter(v => v !== null);
            const poolCounts = rolledPool.reduce((acc, v) => { acc[v] = (acc[v] || 0) + 1; return acc; }, {} as Record<number, number>);

            used.forEach(v => {
                if (v !== null && poolCounts[v] > 0) poolCounts[v]--;
            });
            // Add back current value if set, so it shows in dropdown
            if (val !== null) poolCounts[val] = (poolCounts[val] || 0) + 1;

            const available = Object.entries(poolCounts).flatMap(([v, count]) => Array(count).fill(parseInt(v))).sort((a, b) => b - a);

            const rowFragment = document.createElement('div');
            rowFragment.style.display = 'contents';
            rowFragment.innerHTML = `
                <div style="text-transform: capitalize; align-self: center;">${key}</div>
                <div>
                     <select class="assign-select" data-stat="${key}" style="width: 60px;">
                        <option value="">-</option>
                        ${val !== null ? `<option value="${val}" selected>${val}</option>` : ''}
                        ${available.map(v => `<option value="${v}">${v}</option>`).join('')}
                     </select>
                </div>
                <div style="align-self: center;">${mod > 0 ? '+' : ''}${mod}</div>
                <div style="align-self: center; color: #2ecc71;">${levelBoost > 0 ? '+' : ''}${levelBoost}</div>
                <div class="text-accent" style="align-self: center;">${val ? final : '-'}</div>
                <div style="align-self: center;">${val ? (abilityMod >= 0 ? '+' : '') + abilityMod : '-'}</div>
            `;
            grid?.appendChild(rowFragment);
        });

        containerDiv.querySelectorAll('.assign-select').forEach(select => {
            select.addEventListener('change', (e) => {
                const target = e.target as HTMLSelectElement;
                const stat = target.dataset.stat as keyof AbilityScores;
                const val = target.value ? parseInt(target.value) : null;

                assignedRolls[stat] = val;
                render();
            });
        });

        parent.appendChild(containerDiv);
    };

    init();
    render();
    return container;
}
