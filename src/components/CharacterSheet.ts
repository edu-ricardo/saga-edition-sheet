import type { Character } from '../types';
import '../styles/sheet.scss';
import { getAbilityModifier } from '../utils/rulesEngine';
import { SPECIES, SKILLS } from '../data/rules';

export class CharacterSheet {
    private character: Character;
    private container: HTMLElement;
    private onBack: () => void;

    constructor(container: HTMLElement, character: Character, onBack: () => void) {
        this.container = container;
        this.character = character;
        this.onBack = onBack;
    }

    public render() {
        const c = this.character;

        // Calculated Stats
        const bab = c.classes[0].className === 'Jedi' || c.classes[0].className === 'Soldier' ? c.level : Math.floor(c.level * 0.75);
        const strMod = getAbilityModifier(c.abilities.str);
        const dexMod = getAbilityModifier(c.abilities.dex);
        const threshold = c.defenses.fortitude; // Default rule

        // Attack math
        const melee = bab + strMod;
        const ranged = bab + dexMod;

        // Skill Modifiers
        // Logic: d20 + (Level / 2) + Ability Mod + (5 if Trained) + (Misc)
        const halfLevel = Math.floor(c.level / 2);

        this.container.innerHTML = `
            <div class="actions no-print" style="margin-bottom: 1rem;">
                <button id="close-sheet-btn">Back</button>
                <button onclick="window.print()">Print</button>
            </div>
            
            <div class="character-sheet">
                <!-- Header -->
                <div class="header-section">
                    <div class="char-info">
                        <div><label>Name</label> <span>${c.name}</span></div>
                        <div><label>Player</label> <span>${c.userId || ''}</span></div>
                        <div><label>Class/Level</label> <span>${c.classes.map(cl => `${cl.className} ${cl.level}`).join(' / ')}</span></div>
                        <div><label>Species</label> <span>${c.species}</span></div>
                        <div><label>Destiny</label> <span>${c.destinyPoints}</span></div>
                        <div><label>Force Points</label> <span>${c.forcePoints}</span></div>
                    </div>
                </div>

                <div class="main-grid">
                    <!-- Left: Abilities -->
                    <div class="abilities-col">
                        <div class="abilities-box">
                            ${Object.entries(c.abilities).map(([key, val]) => {
            const mod = getAbilityModifier(val);
            return `
                                <div class="ability-row">
                                    <div class="abil-name">${key.toUpperCase()}</div>
                                    <div class="abil-score">${val}</div>
                                    <div class="abil-mod">${mod >= 0 ? '+' : ''}${mod}</div>
                                </div>
                                `;
        }).join('')}
                        </div>
                    </div>

                    <!-- Right: Main Stats -->
                    <div class="main-content">
                        <!-- Defenses -->
                        <div class="defenses-row">
                            <div class="defense-box">
                                <h4>REFLEX</h4>
                                <div class="def-val">${c.defenses.reflex}</div>
                            </div>
                            <div class="defense-box">
                                <h4>FORTITUDE</h4>
                                <div class="def-val">${c.defenses.fortitude}</div>
                            </div>
                            <div class="defense-box">
                                <h4>WILL</h4>
                                <div class="def-val">${c.defenses.will}</div>
                            </div>
                        </div>

                        <!-- Combat Stats -->
                        <div class="combat-stats">
                            <div class="stat-box">
                                <label>Init</label>
                                <span>+${getIndexedSkillBonus('Initiative', c, dexMod, halfLevel)}</span>
                            </div>
                            <div class="stat-box">
                                <label>Perc</label>
                                <span>+${getIndexedSkillBonus('Perception', c, getAbilityModifier(c.abilities.wis), halfLevel)}</span>
                            </div>
                            <div class="stat-box">
                                <label>BAB</label>
                                <span>+${bab}</span>
                            </div>
                             <div class="stat-box">
                                <label>Speed</label>
                                <span>${SPECIES[c.species]?.speed || 6} sq</span>
                            </div>
                        </div>
                        
                        <!-- Attacks -->
                        <div class="combat-stats">
                             <div class="stat-box" style="grid-column: span 2;">
                                <label>Melee Attack</label>
                                <span>+${melee}</span>
                            </div>
                             <div class="stat-box" style="grid-column: span 2;">
                                <label>Ranged Attack</label>
                                <span>+${ranged}</span>
                            </div>
                        </div>

                        <!-- HP & Condition -->
                        <div class="hp-track-section">
                            <div class="hp-box">
                                <div><label>Hit Points</label> <strong>${c.hp}</strong></div>
                                <div><label>Damage Threshold</label> <strong>${threshold}</strong></div>
                                <div><label>Second Wind</label> <strong>${Math.floor(c.hp / 4)}</strong> (Con/Day: ${1})</div> <!-- Default 1/day or feat based -->
                            </div>
                            <div class="condition-track">
                                <h4>Condition Track</h4>
                                <div class="pips">
                                    <div class="pip"><div class="circle"></div><span>Normal</span></div>
                                    <div class="pip"><div class="circle"></div><span>-1</span></div>
                                    <div class="pip"><div class="circle"></div><span>-2</span></div>
                                    <div class="pip"><div class="circle"></div><span>-5</span></div>
                                    <div class="pip"><div class="circle"></div><span>-10</span></div>
                                    <div class="pip"><div class="circle"></div><span>Helpless</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Skills -->
                <div style="margin-top: 1rem;">
                    <h3>Skills</h3>
                    <div class="skills-grid">
                        ${SKILLS.map(skill => {
            const isTrained = c.skills.includes(skill.name);
            // Determine ability mod based on skill.ability
            const abilVal = c.abilities[skill.ability as keyof typeof c.abilities];
            const mod = getAbilityModifier(abilVal);
            const bonus = halfLevel + mod + (isTrained ? 5 : 0); // Focus feat adds +5 too, complicate later

            return `
                                <div class="skill-row ${isTrained ? 'trained' : ''}">
                                    <label>${skill.name} (${skill.ability.substring(0, 3).toUpperCase()})</label>
                                    <div class="bonus">${bonus >= 0 ? '+' : ''}${bonus}</div>
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>

                <!-- Feats & Talents -->
                <div class="feats-talents">
                    <h4>Feats & Talents</h4>
                    <ul>
                        ${c.feats.map(f => `<li>${f}</li>`).join('')}
                        ${c.talents.map(t => `<li>${t} [Talent]</li>`).join('')}
                        ${(SPECIES[c.species]?.traits || []).map(t => `<li>${t} [Trait]</li>`).join('')}
                    </ul>
                </div>

                <!-- Equipment -->
                <div class="inventory-section">
                    <h4>Equipment (Credits: ${c.credits})</h4>
                    <ul>
                        ${c.inventory.map(i => `<li>${i.name}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        this.container.querySelector('#close-sheet-btn')?.addEventListener('click', () => {
            this.onBack();
        });
    }
}

function getIndexedSkillBonus(skillName: string, c: Character, abilMod: number, halfLevel: number): number {
    const isTrained = c.skills.includes(skillName);
    return halfLevel + abilMod + (isTrained ? 5 : 0);
}
