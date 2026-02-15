import type { Character } from '../types';
import { calculateDerivedStats } from '../utils/rulesEngine';
import { Toast } from './Toast';
import { SpeciesStep } from './WizardSteps/SpeciesStep';
import { ClassStep } from './WizardSteps/ClassStep';
import { AbilitiesStep } from './WizardSteps/AbilitiesStep';
import { SkillsStep } from './WizardSteps/SkillsStep';
import { FeatsStep } from './WizardSteps/FeatsStep';
import { TalentsStep } from './WizardSteps/TalentsStep';
import { EquipmentStep } from './WizardSteps/EquipmentStep';
import { saveCharacter, auth } from '../auth/firebase';

export class Wizard {
    private container: HTMLElement;
    private currentStepIndex: number = 0;
    private character: Character;

    constructor(container: HTMLElement, existingCharacter?: Character) {
        this.container = container;
        this.character = existingCharacter ? JSON.parse(JSON.stringify(existingCharacter)) : this.createEmptyCharacter();
    }

    private createEmptyCharacter(): Character {
        return {
            name: '',
            species: '',
            classes: [],
            level: 1,
            abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
            defenses: { fortitude: 0, reflex: 0, will: 0 },
            hp: 0,
            credits: 0,
            inventory: [],
            skills: [],
            feats: [],
            talents: [],
            forcePoints: 5,
            destinyPoints: 1,
            darkSideScore: 0,
            condition: 0,
            userId: ''
        };
    }

    public render() {
        this.container.innerHTML = '';
        this.container.classList.add('wizard-flex-layout');

        // Create Sidebar
        const sidebar = document.createElement('div');
        sidebar.className = 'wizard-sidebar';

        const steps = [
            'Species', 'Class', 'Abilities', 'Skills',
            'Feats', 'Talents', 'Equipment', 'Summary'
        ];

        steps.forEach((step, index) => {
            const stepBtn = document.createElement('div');
            stepBtn.className = `wizard-nav-item ${index === this.currentStepIndex ? 'active' : ''}`;
            stepBtn.textContent = step;
            stepBtn.addEventListener('click', () => this.goToStep(index));
            sidebar.appendChild(stepBtn);
        });

        // Create Content Area
        const contentArea = document.createElement('div');
        contentArea.className = 'wizard-content';

        // Render current step into contentArea
        this.renderStep(contentArea);

        this.container.appendChild(sidebar);
        this.container.appendChild(contentArea);
    }

    private goToStep(index: number) {
        this.currentStepIndex = index;
        this.render();
    }

    private renderStep(container: HTMLElement) {
        switch (this.currentStepIndex) {
            case 0:
                container.appendChild(SpeciesStep(this.character, () => this.nextStep()));
                break;
            case 1:
                container.appendChild(ClassStep(this.character, () => this.nextStep(), () => this.prevStep()));
                break;
            case 2:
                container.appendChild(AbilitiesStep(this.character, () => {
                    calculateDerivedStats(this.character);
                    this.nextStep();
                }, () => this.prevStep()));
                break;
            case 3:
                container.appendChild(SkillsStep(this.character, () => this.nextStep(), () => this.prevStep()));
                break;
            case 4:
                container.appendChild(FeatsStep(this.character, () => this.nextStep(), () => this.prevStep()));
                break;
            case 5:
                container.appendChild(TalentsStep(this.character, () => this.nextStep(), () => this.prevStep()));
                break;
            case 6:
                container.appendChild(EquipmentStep(this.character, () => this.nextStep(), () => this.prevStep()));
                break;
            case 7:
                this.renderSummary(container);
                break;
            default:
                container.innerHTML = '<p>Unknown Step</p>';
        }
    }

    private renderSummary(container: HTMLElement) {
        container.innerHTML = `
            <div class="wizard-step fade-in">
                <h3>Summary</h3>
                <div class="card">
                    <form id="char-name-form" class="form-group">
                        <label for="char-name">Character Name</label>
                        <input type="text" id="char-name" value="${this.character.name}" placeholder="Enter Name">
                    </form>
                    <p><strong>Race:</strong> ${this.character.species}</p>
                    <p><strong>Class:</strong> ${this.character.classes[0]?.className}</p>
                    <p><strong>HP:</strong> ${this.character.hp}</p>
                    <p><strong>Defenses:</strong> Ref ${this.character.defenses.reflex}, Fort ${this.character.defenses.fortitude}, Will ${this.character.defenses.will}</p>
                    <p><strong>Abilities:</strong> Str ${this.character.abilities.str}, Dex ${this.character.abilities.dex}, Con ${this.character.abilities.con}, Int ${this.character.abilities.int}, Wis ${this.character.abilities.wis}, Cha ${this.character.abilities.cha}</p>
                    <p><strong>Skills:</strong> ${this.character.skills.join(', ')}</p>
                    <p><strong>Feats:</strong> ${this.character.feats.join(', ')}</p>
                    <p><strong>Talents:</strong> ${this.character.talents?.join(', ') || 'None'}</p>
                    <button id="export-json-btn">Export JSON</button>
                </div>
                <div class="actions">
                    <button id="prev-btn">Back</button>
                    <button id="finish-btn" class="primary">Finish & Save</button>
                </div>
            </div>
        `;

        const nameInput = container.querySelector<HTMLInputElement>('#char-name');
        nameInput?.addEventListener('input', (e) => {
            this.character.name = (e.target as HTMLInputElement).value;
        });

        container.querySelector('#prev-btn')?.addEventListener('click', () => this.prevStep());
        container.querySelector('#finish-btn')?.addEventListener('click', async () => {
            if (!this.character.name) {
                Toast.show("Please enter a character name.", 'error');
                return;
            }

            const user = auth.currentUser;
            if (user) {
                try {
                    const btn = container.querySelector('#finish-btn') as HTMLButtonElement;
                    if (btn) {
                        btn.disabled = true;
                        btn.textContent = "Saving...";
                    }
                    await saveCharacter(this.character, user);
                    Toast.show("Character Saved!", 'success');
                    setTimeout(() => window.location.reload(), 1000);
                } catch (e) {
                    Toast.show("Error saving character: " + e, 'error');
                    const btn = container.querySelector('#finish-btn') as HTMLButtonElement;
                    if (btn) {
                        btn.disabled = false;
                        btn.textContent = "Finish & Save";
                    }
                }
            } else {
                Toast.show("You must be signed in to save.", 'error');
            }
        });

        container.querySelector('#export-json-btn')?.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.character, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", this.character.name + ".json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });
    }

    private nextStep() {
        this.currentStepIndex++;
        this.render();
    }

    private prevStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.render();
        }
    }
}
