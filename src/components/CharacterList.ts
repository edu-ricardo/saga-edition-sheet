import { getCharacters, deleteCharacter, type User } from '../auth/firebase';
import { Toast } from './Toast';
import { Modal } from './Modal';
import type { Character } from '../types';

export class CharacterList {
    private container: HTMLElement;
    private user: User;
    private isGM: boolean;
    private chars: Character[] = [];
    private onEdit?: (char: Character) => void; // Standard edit
    private onPlay?: (char: Character) => void; // New Play mode callback

    constructor(container: HTMLElement, user: User, isGM: boolean = false, onEdit?: (char: Character) => void, onPlay?: (char: Character) => void) {
        this.container = container;
        this.user = user;
        this.isGM = isGM;
        this.onEdit = onEdit;
        this.onPlay = onPlay;
    }

    public async render() {
        this.container.innerHTML = '<p>Loading characters...</p>';

        this.chars = await getCharacters(this.isGM ? undefined : this.user.uid);

        if (this.chars.length === 0) {
            this.container.innerHTML = '<p>No characters found.</p>';
            return;
        }

        this.container.innerHTML = `
            <h3>${this.isGM ? 'All Characters (GM Mode)' : 'My Characters'}</h3>
            <div class="char-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
                ${this.chars.map(c => this.renderCard(c)).join('')}
            </div>
            <div class="actions">
                <button id="back-home-btn">Back</button>
            </div>
        `;

        this.container.querySelector('#back-home-btn')?.addEventListener('click', () => {
            window.location.reload();
        });

        // Event delegation for View buttons
        this.container.addEventListener('click', async (e) => {
            const viewBtn = (e.target as HTMLElement).closest('.view-char-btn');
            const deleteBtn = (e.target as HTMLElement).closest('.delete-char-btn');

            if (viewBtn) {
                const charId = (viewBtn as HTMLElement).dataset.id;
                const character = this.chars.find(c => c.id === charId);
                if (character) {
                    const { CharacterSheet } = await import('./CharacterSheet');
                    const sheet = new CharacterSheet(this.container, character, () => this.render());
                    sheet.render();
                }
            }

            const playBtn = (e.target as HTMLElement).closest('.play-char-btn');
            if (playBtn) {
                const charId = (playBtn as HTMLElement).dataset.id;
                const character = this.chars.find(c => c.id === charId);
                if (character && this.onPlay) {
                    this.onPlay(character);
                }
            }

            const editBtn = (e.target as HTMLElement).closest('.edit-char-btn');
            if (editBtn) {
                const charId = (editBtn as HTMLElement).dataset.id;
                const character = this.chars.find(c => c.id === charId);
                if (character && this.onEdit) {
                    this.onEdit(character);
                }
            }

            if (deleteBtn) {
                const charId = (deleteBtn as HTMLElement).dataset.id;
                if (charId) {
                    Modal.confirm(
                        'Are you sure you want to delete this character? This action cannot be undone.',
                        async () => {
                            try {
                                await deleteCharacter(charId);
                                Toast.show('Character deleted successfully.', 'success');
                                await this.render(); // Refresh list
                            } catch (error) {
                                Toast.show('Failed to delete character.', 'error');
                                console.error(error);
                            }
                        }
                    );
                }
            }
        });
    }

    private renderCard(c: Character): string {
        return `
            <div class="card">
                <h4>${c.name}</h4>
                <p>Level ${c.level} ${c.species} ${c.classes.map(cl => cl.className).join('/')}</p>
                <div style="font-size: 0.9em; color: #666; margin-top: 0.5rem;">
                    HP: ${c.hp} | Def: R${c.defenses.reflex}/F${c.defenses.fortitude}/W${c.defenses.will}
                </div>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="play-char-btn primary" data-id="${c.id}" style="padding: 0.3rem 0.6rem; font-size: 0.9em; flex: 1;">▶ Play</button>
                    <button class="view-char-btn" data-id="${c.id}" style="padding: 0.3rem 0.6rem; font-size: 0.9em;">View</button>
                    ${!this.isGM ? `<button class="edit-char-btn" data-id="${c.id}" style="padding: 0.3rem 0.6rem; font-size: 0.9em;">Edit</button>` : ''}
                    ${!this.isGM ? `<button class="delete-char-btn" data-id="${c.id}" style="padding: 0.3rem 0.6rem; font-size: 0.9em; background-color: #ffebee; color: #c62828; border-color: #ef9a9a;">Delete</button>` : ''}
                </div>
            </div>
        `;
    }
}
