import type { Character, Weapon, Armor } from '../../types';
import { WEAPONS, ARMOR, EQUIPMENT } from '../../data/rules';
import { Toast } from '../Toast';

export function EquipmentStep(character: Character, onNext: () => void, onBack: () => void): HTMLElement {
    const container = document.createElement('div');
    container.className = 'wizard-step fade-in';

    if (character.credits === 0) {
        character.credits = 3000;
    }

    // State
    let currentTab: 'weapons' | 'armor' | 'gear' = 'weapons';
    let searchTerm = '';

    const render = () => {
        container.innerHTML = `
            <h3>Step 6: Equipment</h3>
            <p class="mb-4">You have <strong><span id="credits-display">${character.credits}</span></strong> credits remaining.</p>
            
            <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 400px;">
                    <h4>Shop</h4>
                    
                    <div class="tabs" style="display: flex; gap: 1rem; margin-bottom: 1rem; border-bottom: 1px solid #ccc; padding-bottom: 0.5rem;">
                        <button class="tab-btn ${currentTab === 'weapons' ? 'active' : ''}" data-tab="weapons">Weapons</button>
                        <button class="tab-btn ${currentTab === 'armor' ? 'active' : ''}" data-tab="armor">Armor</button>
                        <button class="tab-btn ${currentTab === 'gear' ? 'active' : ''}" data-tab="gear">Gear</button>
                    </div>

                    <div class="form-group">
                        <input type="text" id="shop-search" placeholder="Search ${currentTab}..." value="${searchTerm}" style="width: 100%;">
                    </div>
                    <div class="skills-grid" id="shop-list" style="max-height: 500px; overflow-y: auto; display: grid; grid-template-columns: 1fr; gap: 0.5rem;">
                        ${renderShopList(currentTab, searchTerm, character)}
                    </div>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                    <h4>Inventory</h4>
                    <div class="card" id="inventory-list" style="min-height: 200px; max-height: 600px; overflow-y: auto;">
                        ${renderInventory(character)}
                    </div>
                </div>
            </div>
            
            <div class="actions">
                <button id="prev-btn">Back</button>
                <button id="next-step-btn" class="primary">Next: Review</button>
            </div>
        `;

        attachEvents();
    };

    const attachEvents = () => {
        container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentTab = (e.target as HTMLElement).dataset.tab as any;
                render();
            });
        });

        const searchInput = container.querySelector<HTMLInputElement>('#shop-search');
        if (searchInput) {
            searchInput.focus(); // Keep focus
            // Place cursor at end
            const len = searchInput.value.length;
            searchInput.setSelectionRange(len, len);

            searchInput.addEventListener('input', (e) => {
                searchTerm = (e.target as HTMLInputElement).value;
                // No full re-render, just update list? 
                // Full re-render is easier for now but loses focus.
                // Optimally just update list container.
                const list = container.querySelector('#shop-list');
                if (list) list.innerHTML = renderShopList(currentTab, searchTerm, character);
            });
        }

        container.querySelector('#shop-list')?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('buy-item-btn')) {
                const index = parseInt(target.dataset.index || '-1');
                const list = getList(currentTab);
                const item = list[index];

                if (item && character.credits >= item.cost) {
                    character.credits -= item.cost;
                    // Add type marker if not present (though our objects are typed)
                    const invItem = { ...item, group: currentTab === 'gear' ? 'General' : capitalize(currentTab) };
                    character.inventory.push(invItem);
                    render(); // Re-render to update credits and inventory
                } else if (item) {
                    Toast.show("Not enough credits!", 'error');
                }
            }
        });

        container.querySelector('#inventory-list')?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('remove-item-btn')) {
                const index = parseInt(target.dataset.index || '-1');
                if (index > -1) {
                    const item = character.inventory[index];
                    character.credits += item.cost; // Full refund? Sure.
                    character.inventory.splice(index, 1);
                    render();
                }
            }
        });

        container.querySelector('#prev-btn')?.addEventListener('click', onBack);
        container.querySelector('#next-step-btn')?.addEventListener('click', onNext);
    };

    render();
    return container;
}

function getList(tab: string): any[] {
    switch (tab) {
        case 'weapons': return WEAPONS;
        case 'armor': return ARMOR;
        case 'gear': return EQUIPMENT;
        default: return [];
    }
}

function renderShopList(tab: string, filter: string, character: Character): string {
    const list = getList(tab);
    const filtered = list.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) return '<p>No items found.</p>';

    return filtered.map((item) => {
        const canAfford = character.credits >= item.cost;
        let details = '';

        if (tab === 'weapons') {
            const w = item as Weapon;
            details = `
                <div style="font-size: 0.85em; color: #444; margin-top: 4px;">
                    <strong>${w.damage}</strong> ${w.type} | Range: ${w.range || 'Melee'} | Size: ${w.size}
                    ${w.stun ? '<span style="color: blue; margin-left: 5px;">(Stun)</span>' : ''}
                    ${w.rateOfFire ? `<span style="margin-left: 5px;">RoF: ${w.rateOfFire}</span>` : ''}
                </div>`;
        } else if (tab === 'armor') {
            const a = item as Armor;
            details = `
                <div style="font-size: 0.85em; color: #444; margin-top: 4px;">
                    Reflex: <strong>+${a.armorBonus}</strong> | Fort: +${a.fortitudeBonus} | Max Dex: +${a.maxDex} | ${a.type}
                </div>`;
        } else {
            // Gear
            if (item.description) {
                details = `<div style="font-size: 0.85em; color: #666; margin-top: 4px; font-style: italic;">${item.description}</div>`;
            }
        }

        // Real index in the MAIN list (to buy correctly)
        // Oops, filtering messes up index. We need original object reference or ID.
        // Assuming names are unique? Or we pass the item itself?
        // Let's rely on finding it in the main list by NAME in the click handler? No, dups possible?
        // Let's use `list.indexOf(item)` which works if same array keys.
        const realIndex = list.indexOf(item);

        return `
        <div class="shop-item card" style="display: flex; justify-content: space-between; align-items: start; padding: 0.75rem; border-left: 4px solid ${getColor(tab)}; ${!canAfford ? 'opacity: 0.7;' : ''}">
            <div style="flex: 1;">
                <div class="item-name" style="font-weight: bold; font-size: 1em;">${item.name}</div>
                <div style="font-size: 0.9em; color: #666;">${item.cost} cr | ${item.weight} kg</div>
                ${details}
            </div>
            <button class="buy-item-btn" data-index="${realIndex}" style="margin-left: 10px; padding: 0.3rem 0.8rem; white-space: nowrap;" ${!canAfford ? 'disabled' : ''}>Buy</button>
        </div>
    `}).join('');
}

function renderInventory(character: Character): string {
    if (character.inventory.length === 0) return '<p style="padding: 1rem; color: #888;">No items.</p>';

    return character.inventory.map((item, index) => `
        <div class="inventory-item" style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; border-bottom: 1px solid #eee;">
            <div>
                <span style="font-weight: 500;">${item.name}</span>
                <span style="font-size: 0.8em; color: #888; margin-left: 5px;">(${item.group || 'Item'})</span>
            </div>
            <button class="remove-item-btn" data-index="${index}" style="padding: 0.2rem 0.5rem; font-size: 0.8em; background-color: #ffebee; color: #c62828; border-color: #ef9a9a;">Remove</button>
        </div>
    `).join('');
}

function getColor(tab: string) {
    if (tab === 'weapons') return '#e57373';
    if (tab === 'armor') return '#64b5f6';
    return '#81c784';
}

function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
