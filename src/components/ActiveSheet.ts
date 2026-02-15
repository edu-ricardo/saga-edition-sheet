import type { Character } from '../types';
// import '../styles/sheet.scss'; // Removing redundant import that might be causing build issues
import { getAbilityModifier, calculateAttack, getMaxHp, applyRest, getConditionPenalty, getSkillBonus } from '../utils/rulesEngine';
import { DiceRoller } from '../utils/DiceRoller';
import { saveCharacter } from '../auth/firebase';
import { Toast } from './Toast';
import { SKILLS, WEAPONS, ARMOR, EQUIPMENT, FEATS } from '../data/rules';
import { TALENTS } from '../data/talents';
import { Modal } from './Modal';
import { type User } from 'firebase/auth';

export class ActiveSheet {
    private character: Character;
    private container: HTMLElement;
    private user: User;
    private onBack: () => void;
    private rollLog: string[] = [];

    constructor(container: HTMLElement, character: Character, user: User, onBack: () => void) {
        this.container = container;
        this.character = character;
        this.user = user;
        this.onBack = onBack;

        // Ensure condition is initialized
        if (typeof this.character.condition === 'undefined') {
            this.character.condition = 0;
        }
    }

    public render() {
        this.container.innerHTML = '';
        this.container.className = 'active-sheet-container';

        const c = this.character;
        const maxHp = getMaxHp(c);

        const currentCond = c.condition || 0;
        const condLabel = this.getConditionLabel(currentCond);
        const condPenalty = getConditionPenalty(currentCond);

        this.container.innerHTML = `
            <header class="active-sheet-header">
                <div class="header-info">
                    <h2>${c.name}</h2>
                    <span>Lv ${c.level} ${c.species} ${c.classes.map(cl => cl.className).join('/')}</span>
                </div>
                <div class="header-actions">
                    <button id="rest-btn" class="secondary">Long Rest (8h)</button>
                    <button id="close-btn">Exit Session</button>
                </div>
            </header>

            <div class="active-sheet-grid">
                <!-- LEFT COLUMN: STATUS & DEFENSES -->
                <section class="status-col">
                    <div class="card status-card">
                        <h3>Vitality</h3>
                        <div class="hp-control">
                            <div class="hp-display">
                                <span class="label">HP</span>
                                <span class="value" id="hp-val">${c.hp}</span>
                                <span class="max">/ ${maxHp}</span>
                            </div>
                            <div class="hp-buttons">
                                <button class="hp-btn" data-amt="-1">-1</button>
                                <button class="hp-btn" data-amt="-5">-5</button>
                                <button class="hp-btn" data-amt="1">+1</button>
                                <button class="hp-btn" data-amt="5">+5</button>
                            </div>
                            <div class="second-wind-box">
                                <button id="second-wind-btn">Second Wind (${Math.floor(maxHp / 4)})</button>
                                <span class="subtext">Threshold: ${c.defenses.fortitude}</span>
                            </div>
                        </div>
                        
                        <!-- Condition Track -->
                        <div class="condition-track-box" style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #ccc;">
                            <h4 style="margin: 0 0 5px 0; font-size: 0.9em; text-transform: uppercase; color: #666;">Condition Track</h4>
                            <div class="condition-control" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                                <button class="cond-btn secondary" data-action="improve" ${currentCond === 0 ? 'disabled' : ''}>Recover</button>
                                <div style="text-align: center; flex: 1;">
                                    <span class="cond-val" style="font-weight: bold; font-size: 1.1em; display: block; color: ${currentCond > 0 ? '#d32f2f' : 'inherit'}">${condLabel}</span>
                                    <span style="font-size: 0.75em; color: #666;">Step ${currentCond}/5</span>
                                </div>
                                <button class="cond-btn secondary" data-action="worsen" ${currentCond === 5 ? 'disabled' : ''}>Worsen</button>
                            </div>
                            ${condPenalty < 0 ? `<div style="text-align: center; font-size: 0.8em; color: #d32f2f; margin-top: 4px;">Penalty to all rolls: <strong>${condPenalty}</strong></div>` : ''}
                        </div>
                    </div>

                    <div class="card defenses-card">
                        <h3>Defenses</h3>
                        <div class="def-grid">
                            <div class="def-box">
                                <span class="def-label">REF</span>
                                <span class="def-val">${c.defenses.reflex + condPenalty} <span style="font-size: 0.6em; color: ${condPenalty < 0 ? '#d32f2f' : '#666'}">(${condPenalty})</span></span>
                            </div>
                            <div class="def-box">
                                <span class="def-label">FORT</span>
                                <span class="def-val">${c.defenses.fortitude + condPenalty} <span style="font-size: 0.6em; color: ${condPenalty < 0 ? '#d32f2f' : '#666'}">(${condPenalty})</span></span>
                            </div>
                            <div class="def-box">
                                <span class="def-label">WILL</span>
                                <span class="def-val">${c.defenses.will + condPenalty} <span style="font-size: 0.6em; color: ${condPenalty < 0 ? '#d32f2f' : '#666'}">(${condPenalty})</span></span>
                            </div>
                        </div>
                    </div>

                    <div class="card resources-card">
                        <h3>Resources</h3>
                        <div class="resource-row">
                            <label>Force Points</label>
                            <div class="stepper">
                                <button class="stepper-btn" data-resource="forcePoints" data-delta="-1">-</button>
                                <span id="fp-val">${c.forcePoints}</span>
                                <button class="stepper-btn" data-resource="forcePoints" data-delta="1">+</button>
                            </div>
                        </div>
                        <div class="resource-row">
                            <label>Destiny Points</label>
                            <div class="stepper">
                                <button class="stepper-btn" data-resource="destinyPoints" data-delta="-1">-</button>
                                <span id="dp-val">${c.destinyPoints}</span>
                                <button class="stepper-btn" data-resource="destinyPoints" data-delta="1">+</button>
                            </div>
                        </div>
                         <div class="resource-row">
                            <label>Credits</label>
                            <div class="stepper">
                                <button class="credits-btn" data-action="spend">-</button>
                                <span id="credits-val">${c.credits}</span> cr
                                <button class="credits-btn" data-action="add">+</button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CENTER COLUMN: ACTIONS & INVENTORY -->
                <section class="actions-col">
                    <div class="card attacks-card">
                        <h3>Attacks</h3>
                        <div class="attacks-list">
                            ${this.renderAttacks(condPenalty)}
                        </div>
                    </div>

                    <div class="card skills-card">
                        <h3>Skills & Abilities</h3>
                        <div style="margin-bottom: 10px">
                             ${this.renderAbilities(condPenalty)}
                        </div>
                        <div class="skills-quick-list">
                             ${this.renderSkills(condPenalty)}
                        </div>
                    </div>

                    <div class="card inventory-card">
                        <div class="card-header">
                            <h3>Inventory</h3>
                            <button id="add-item-btn" class="small-btn">+ Add</button>
                        </div>
                        <ul class="inventory-list" id="inventory-list">
                            ${c.inventory.map((item, idx) => `
                                <li class="inv-item" style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px solid #eee;">
                                    <div style="flex: 1;">
                                        <div style="font-weight: 500;">${item.name}</div>
                                        <div style="font-size: 0.75em; color: #666;">
                                            ${item.type || 'Gear'} | ${item.weight || 0}kg | ${item.cost || 0}cr
                                        </div>
                                    </div>
                                    <button class="delete-item-btn" data-idx="${idx}" style="color: #d32f2f; background: none; border: none; font-size: 1.2em; cursor: pointer; padding: 0 5px;">&times;</button>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </section>

                <!-- RIGHT COLUMN: LOG & FEATURES -->
                <section class="log-col">
                    <div class="card log-card">
                        <h3>Session Log</h3>
                        <div id="roll-log" class="roll-log-container">
                            <div class="log-entry system">Session started.</div>
                        </div>
                    </div>
                    <div class="card features-card">
                        <h3>Feats & Talents</h3>
                        <div class="features-list">
                             ${c.feats.map(f => {
            const featData = FEATS.find(data => data.name === f);
            return `
                                    <div class="feature-item" style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #eee;">
                                        <div style="font-weight: bold;">${f}</div>
                                        <div style="font-size: 0.85em; color: #555;">${featData?.description || 'No description available.'}</div>
                                    </div>
                                 `;
        }).join('')}
                             ${c.talents.map(t => {
            const talentData = TALENTS.find(data => data.name === t);
            return `
                                    <div class="feature-item" style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #eee;">
                                        <div style="font-weight: bold;">${t} <span style="font-weight: normal; font-size: 0.8em; color: #777;">(Talent)</span></div>
                                        <div style="font-size: 0.85em; color: #555;">${talentData?.description || 'No description available.'}</div>
                                    </div>
                                 `;
        }).join('')}
                        </div>
                    </div>
                </section>
            </div>
        `;

        this.attachListeners();
    }

    private getConditionLabel(level: number): string {
        switch (level) {
            case 0: return 'Normal';
            case 1: return '-1 Penalty';
            case 2: return '-2 Penalty';
            case 3: return '-5 Penalty';
            case 4: return '-10 Penalty';
            case 5: return 'Helpless';
            default: return 'Normal';
        }
    }

    private renderAbilities(condPenalty: number): string {
        const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
        // Simple 3-col grid for abilities
        return `
            <div class="abilities-quick-list" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px;">
                ${abilities.map(a => {
            const mod = getAbilityModifier(this.character.abilities[a]);
            const total = mod + condPenalty;
            const label = a.toUpperCase();
            return `<button class="ability-check-btn" data-ability="${label}" data-bonus="${total}" data-base="${mod}" style="padding: 4px 0; font-size: 0.8rem;">
                        ${label}<br/><span style="font-size: 0.9em; font-weight: bold; color: ${condPenalty < 0 ? '#d32f2f' : 'inherit'}">${total >= 0 ? '+' : ''}${total}</span>
                    </button>`;
        }).join('')}
            </div>
        `;
    }

    private renderAttacks(condPenalty: number): string {
        const weapons = this.character.inventory.filter(i =>
            i.type === 'Weapon' || // Check explicit type first
            i.name.toLowerCase().includes('blaster') ||
            i.name.toLowerCase().includes('saber') ||
            i.name.toLowerCase().includes('pistol') ||
            i.name.toLowerCase().includes('rifle') ||
            i.name.toLowerCase().includes('blade') ||
            i.name.toLowerCase().includes('knife')
        );

        if (weapons.length === 0) return '<p class="text-muted">No weapons equipped.</p>';

        return weapons.map(w => {
            let type: any = 'Simple';
            if (w.name.toLowerCase().includes('rifle')) type = 'Rifle';
            else if (w.name.toLowerCase().includes('pistol') || w.name.toLowerCase().includes('blaster')) type = 'Pistol';
            else if (w.name.toLowerCase().includes('saber')) type = 'Melee';

            const baseAttack = calculateAttack(this.character, type);
            const attackBonus = baseAttack + condPenalty;

            let damage = w.damage;
            if (!damage) {
                const weaponData = WEAPONS.find(data => data.name === w.name);
                damage = weaponData ? weaponData.damage : (type === 'Melee' ? '1d8' : '3d8');
            }

            return `
                <div class="attack-row">
                    <div class="attack-info">
                        <span class="attack-name">${w.name}</span>
                        <span class="attack-bonus" style="color: ${condPenalty < 0 ? '#d32f2f' : '#2ecc71'}">${attackBonus >= 0 ? '+' : ''}${attackBonus}</span>
                        <span class="attack-damage" style="font-size: 0.8em; color: #666; margin-left: 8px;">(${damage})</span>
                    </div>
                    <div style="display: flex; gap: 5px;">
                        <button class="roll-attack-btn" data-name="${w.name}" data-bonus="${attackBonus}" data-cond-penalty="${condPenalty}">Attack</button>
                        <button class="roll-damage-btn" data-name="${w.name}" data-damage="${damage}">Damage</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    private renderSkills(condPenalty: number): string {
        const trained = this.character.skills;
        const abbrMap: Record<string, string> = {
            str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA'
        };

        return SKILLS.map(skillData => {
            const s = skillData.name;
            const abilKey = skillData.ability as keyof typeof this.character.abilities;
            const isTrained = trained.includes(s);
            const total = getSkillBonus(this.character, s) + condPenalty;

            const abbr = abbrMap[abilKey] || abilKey.toUpperCase().substring(0, 3);

            return `
                <button class="skill-btn ${isTrained ? 'trained' : ''}" data-skill="${s}" data-bonus="${total}" data-cond-penalty="${condPenalty}">
                    <span class="skill-name">${s} <span style="font-size: 0.8em; opacity: 0.7;">(${abbr})</span></span>
                    <span class="skill-mod" style="color: ${condPenalty < 0 ? '#d32f2f' : 'inherit'}">${total >= 0 ? '+' : ''}${total}</span>
                </button>
            `;
        }).join('');
    }

    private attachListeners() {
        this.container.querySelector('#close-btn')?.addEventListener('click', this.onBack);

        this.container.querySelector('#rest-btn')?.addEventListener('click', async () => {
            Modal.confirm("Take a long rest (8 hours)? This will recover HP and ability damage.", async () => {
                applyRest(this.character);
                this.character.condition = 0; // Reset condition on long rest
                await this.save();
                this.render();
                this.log("Long rest taken. HP recovered & Condition reset.", "system");
            });
        });

        this.container.querySelectorAll('.hp-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const amt = parseInt((e.target as HTMLElement).dataset.amt || '0');
                const maxHp = getMaxHp(this.character);
                this.character.hp = Math.min(Math.max(0, this.character.hp + amt), maxHp);
                await this.save();
                this.render();
                this.log(`HP ${amt > 0 ? 'healed' : 'damage'}: ${Math.abs(amt)}`, amt > 0 ? 'heal' : 'damage');
            });
        });

        this.container.querySelector('#second-wind-btn')?.addEventListener('click', async () => {
            const heal = Math.floor(getMaxHp(this.character) / 4);
            this.character.hp = Math.min(getMaxHp(this.character), this.character.hp + heal);
            // Second wind also moves up condition track by 1 step if possible
            if (this.character.condition && this.character.condition > 0) {
                this.character.condition -= 1;
            }
            await this.save();
            this.render();
            this.log(`Second Wind used. Healed ${heal} HP.`, "heal");
        });

        // Condition Track listeners
        this.container.querySelectorAll('.cond-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const action = (e.target as HTMLElement).dataset.action;
                let val = this.character.condition || 0;

                if (action === 'improve' && val > 0) val--;
                if (action === 'worsen' && val < 5) val++;

                this.character.condition = val;
                await this.save();
                this.render();

                const newLabel = this.getConditionLabel(val);
                this.log(`Condition changed to: ${newLabel}`, 'system');
            });
        });

        this.container.querySelectorAll('.stepper-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const target = e.target as HTMLElement;
                const resource = target.dataset.resource as 'forcePoints' | 'destinyPoints';
                const delta = parseInt(target.dataset.delta || '0');

                if (resource === 'forcePoints') {
                    this.character.forcePoints = Math.max(0, this.character.forcePoints + delta);
                } else {
                    this.character.destinyPoints = Math.max(0, this.character.destinyPoints + delta);
                }
                await this.save();
                this.render();
                this.log(`${resource === 'forcePoints' ? 'Force Point' : 'Destiny Point'} ${delta > 0 ? 'added' : 'used'}.`, "system");
            });
        });

        this.container.querySelectorAll('.roll-attack-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                const name = target.dataset.name!;
                const bonus = parseInt(target.dataset.bonus!);
                const penalty = parseInt(target.dataset.condPenalty || '0');

                const result = DiceRoller.roll(20, bonus);
                const rollBreakdown = `(d20: ${result.dieRoll} + ${bonus - penalty} ${penalty < 0 ? `${penalty} [Cond]` : ''})`;
                this.log(`<strong>${name}</strong> Attack: <strong>${result.total}</strong> ${rollBreakdown}`, result.isCritical ? 'crit' : (result.isFail ? 'fail' : 'roll'));
            });
        });

        this.container.querySelectorAll('.roll-damage-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                const name = target.dataset.name!;
                const damage = target.dataset.damage!;

                const result = DiceRoller.rollString(damage);
                if (result) {
                    this.log(`<strong>${name}</strong> Damage: <strong>${result.total}</strong> ${result.breakdown}`, 'damage');
                } else {
                    Toast.show(`Invalid damage: ${damage}`, 'error');
                }
            });
        });

        this.container.querySelectorAll('.skill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = (e.target as HTMLElement).closest('.skill-btn') as HTMLElement;
                const skill = target.dataset.skill!;
                const bonus = parseInt(target.dataset.bonus!);
                const penalty = parseInt(target.dataset.condPenalty || '0');

                const result = DiceRoller.roll(20, bonus);
                const rollBreakdown = `(d20: ${result.dieRoll} + ${bonus - penalty} ${penalty < 0 ? `${penalty} [Cond]` : ''})`;
                this.log(`<strong>${skill}</strong> Check: <strong>${result.total}</strong> ${rollBreakdown}`, result.isCritical ? 'crit' : (result.isFail ? 'fail' : 'roll'));
            });
        });

        // Ability Checks
        this.container.querySelectorAll('.ability-check-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = (e.target as HTMLElement).closest('.ability-check-btn') as HTMLElement;
                const ability = target.dataset.ability!;
                const bonus = parseInt(target.dataset.bonus!);
                // const penalty = parseInt(target.dataset.condPenalty || this.getPenalty() + '');

                // Helper to get penalty if not in dataset, but we render properly now
                // Actually button bonus includes penalty, but we want to show it in log

                const result = DiceRoller.roll(20, bonus);
                // The bonus in dataset already includes penalty for display, so we just use it
                // We want to reconstruct the calc for the log
                const penaltyVal = getConditionPenalty(this.character.condition);
                const base = bonus - penaltyVal;

                const rollBreakdown = `(d20: ${result.dieRoll} + ${base} ${penaltyVal < 0 ? `${penaltyVal} [Cond]` : ''})`;
                this.log(`<strong>${ability}</strong> Check: <strong>${result.total}</strong> ${rollBreakdown}`, result.isCritical ? 'crit' : (result.isFail ? 'fail' : 'roll'));
            });
        });



        this.container.querySelectorAll('.credits-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = (e.target as HTMLElement).dataset.action;
                const isAdd = action === 'add';

                Modal.prompt(
                    isAdd ? "Amount to ADD:" : "Amount to SPEND:",
                    async (val) => {
                        const amount = parseInt(val || '0');
                        if (amount > 0) {
                            if (isAdd) {
                                this.character.credits += amount;
                                await this.save();
                                this.render();
                                this.log(`Added ${amount} credits.`, "system");
                            } else {
                                if (this.character.credits >= amount) {
                                    this.character.credits -= amount;
                                    await this.save();
                                    this.render();
                                    this.log(`Spent ${amount} credits.`, "system");
                                } else {
                                    Toast.show("Not enough credits!", "error");
                                }
                            }
                        }
                    }
                );
            });
        });

        this.container.querySelector('#add-item-btn')?.addEventListener('click', () => {
            this.openAddInventoryModal();
        });

        this.container.querySelectorAll('.delete-item-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const target = (e.target as HTMLElement).closest('.delete-item-btn') as HTMLElement;
                const idx = parseInt(target.dataset.idx!);
                const item = this.character.inventory[idx];
                Modal.confirm(`Remove ${item.name}?`, async () => {
                    this.character.inventory.splice(idx, 1);
                    await this.save();
                    this.render();
                    this.log(`Removed item: ${item.name}`, "system");
                });
            });
        });

        const logContainer = this.container.querySelector('#roll-log');
        if (logContainer) {
            logContainer.innerHTML = this.rollLog.map(l => `<div class="log-entry">${l}</div>`).join('');
            logContainer.scrollTop = logContainer.scrollHeight;
        }
    }

    private openAddInventoryModal() {
        const content = document.createElement('div');
        let currentTab: 'weapons' | 'armor' | 'gear' | 'custom' = 'weapons';
        let searchTerm = '';

        const renderModalContent = () => {
            content.innerHTML = `
                <div class="tabs" style="display: flex; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 1px solid #ccc; padding-bottom: 0.5rem;">
                    <button class="tab-btn ${currentTab === 'weapons' ? 'active' : ''}" data-tab="weapons">Weapons</button>
                    <button class="tab-btn ${currentTab === 'armor' ? 'active' : ''}" data-tab="armor">Armor</button>
                    <button class="tab-btn ${currentTab === 'gear' ? 'active' : ''}" data-tab="gear">Gear</button>
                    <button class="tab-btn ${currentTab === 'custom' ? 'active' : ''}" data-tab="custom">Custom</button>
                </div>
                
                <div id="tab-content" style="max-height: 400px; overflow-y: auto;">
                    ${currentTab === 'custom' ? this.renderCustomItemForm() : this.renderShopList(currentTab as 'weapons' | 'armor' | 'gear', searchTerm)}
                </div>
            `;

            // Attach internal listeners
            content.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    currentTab = (e.target as HTMLElement).dataset.tab as any;
                    renderModalContent();
                });
            });

            if (currentTab !== 'custom') {
                const searchInput = content.querySelector('#shop-search') as HTMLInputElement;
                if (searchInput) {
                    searchInput.addEventListener('input', (e) => {
                        searchTerm = (e.target as HTMLInputElement).value;
                        const list = content.querySelector('#shop-list');
                        if (list) list.innerHTML = this.renderShopListItems(currentTab as 'weapons' | 'armor' | 'gear', searchTerm);
                    });
                    // Restore focus and cursor
                    const len = searchTerm.length;
                    searchInput.focus();
                    searchInput.setSelectionRange(len, len);
                }

                content.querySelectorAll('.buy-item-btn').forEach(btn => {
                    btn.addEventListener('click', async (e) => {
                        const target = e.target as HTMLElement;
                        const name = target.dataset.name!;
                        const cost = parseInt(target.dataset.cost!);
                        const type = target.dataset.type || 'Gear';
                        const weight = parseFloat(target.dataset.weight || '0');
                        const damage = target.dataset.damage || '';

                        if (this.character.credits >= cost) {
                            this.character.credits -= cost;
                            this.character.inventory.push({ name, quantity: 1, cost, weight, type, damage });
                            await this.save();
                            this.render(); // Update main sheet
                            this.log(`Bought ${name} for ${cost} cr.`, "system");
                            Toast.show(`Bought ${name}`, 'success');
                            renderModalContent(); // Update modal (credits shown in header? No, need to show somewhere)
                        } else {
                            Toast.show("Not enough credits!", 'error');
                        }
                    });
                });
            } else {
                // Custom form listeners
                const formBtn = content.querySelector('#add-custom-btn');
                formBtn?.addEventListener('click', async () => {
                    const name = (content.querySelector('#custom-name') as HTMLInputElement).value;
                    const cost = parseInt((content.querySelector('#custom-cost') as HTMLInputElement).value || '0');
                    const weight = parseFloat((content.querySelector('#custom-weight') as HTMLInputElement).value || '0');
                    const type = (content.querySelector('#custom-type') as HTMLInputElement).value;
                    const damage = (content.querySelector('#custom-damage') as HTMLInputElement).value;

                    if (!name) {
                        Toast.show("Name is required", 'error');
                        return;
                    }

                    if (this.character.credits >= cost) {
                        this.character.credits -= cost;
                        this.character.inventory.push({ name, quantity: 1, cost, weight, type, damage });
                        await this.save();
                        this.render();
                        this.log(`Added custom item ${name} (${cost} cr).`, "system");
                        Toast.show(`Added ${name}`, 'success');
                        closeModal();
                    } else {
                        Toast.show("Not enough credits!", 'error');
                    }
                });
            }
        };

        const closeModal = Modal.show(`Add to Inventory (Credits: ${this.character.credits})`, content);
        renderModalContent();
    }

    private renderShopList(tab: 'weapons' | 'armor' | 'gear', filter: string): string {
        return `
            <div class="form-group" style="margin-bottom: 1rem;">
                <input type="text" id="shop-search" placeholder="Search ${tab}..." value="${filter}" style="width: 100%; padding: 0.5rem;">
            </div>
            <div id="shop-list" style="display: grid; gap: 0.5rem;">
                ${this.renderShopListItems(tab, filter)}
            </div>
         `;
    }

    private renderShopListItems(tab: 'weapons' | 'armor' | 'gear', filter: string): string {
        let list: any[] = [];
        if (tab === 'weapons') list = WEAPONS;
        if (tab === 'armor') list = ARMOR;
        if (tab === 'gear') list = EQUIPMENT;

        const filtered = list.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()));
        if (filtered.length === 0) return '<p>No items found.</p>';

        return filtered.map(item => {
            const canAfford = this.character.credits >= item.cost;
            return `
                <div class="shop-item card" style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; opacity: ${canAfford ? 1 : 0.6};">
                    <div>
                        <div style="font-weight: bold;">${item.name}</div>
                        <div style="font-size: 0.8em; color: #666;">${item.cost} cr | ${item.weight} kg</div>
                    </div>
                    <button class="buy-item-btn small-btn" data-name="${item.name}" data-cost="${item.cost}" data-weight="${item.weight}" data-type="${tab === 'gear' ? 'Gear' : (tab === 'weapons' ? 'Weapon' : 'Armor')}" data-damage="${(item as any).damage || ''}" ${!canAfford ? 'disabled' : ''}>Buy</button>
                </div>
            `;
        }).join('');
    }

    private renderCustomItemForm(): string {
        return `
            <div class="custom-item-form">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="custom-name" style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select id="custom-type" style="width: 100%;">
                        <option value="Gear">Gear</option>
                        <option value="Weapon">Weapon</option>
                        <option value="Armor">Armor</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Damage (e.g. 3d8)</label>
                    <input type="text" id="custom-damage" placeholder="2d8+2" style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>Cost (cr)</label>
                    <input type="number" id="custom-cost" value="0" style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>Weight (kg)</label>
                    <input type="number" id="custom-weight" value="0.1" step="0.1" style="width: 100%;">
                </div>
                <button id="add-custom-btn" class="primary" style="margin-top: 1rem; width: 100%;">Add Item</button>
            </div>
        `;
    }




    private log(message: string, type: 'roll' | 'crit' | 'fail' | 'system' | 'heal' | 'damage' = 'roll'): void {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const entry = `<span class="log-time">[${time}]</span> <span class="log-msg ${type}">${message}</span>`;
        this.rollLog.push(entry);

        const logContainer = this.container.querySelector('#roll-log');
        if (logContainer) {
            const div = document.createElement('div');
            div.className = 'log-entry';
            div.innerHTML = entry;
            logContainer.appendChild(div);
            logContainer.scrollTop = logContainer.scrollHeight;
        }
    }

    private async save() {
        try {
            if (this.character.id) {
                await saveCharacter(this.character, this.user);
            }
        } catch (e) {
            console.error("Auto-save failed", e);
            Toast.show("Failed to save changes", "error");
        }
    }
}
