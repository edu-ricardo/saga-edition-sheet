import type { Character } from '../types';
import { SPECIES, CLASSES } from '../data/rules';

export function getAbilityModifier(score: number): number {
    return Math.floor((score - 10) / 2);
}

export function calculateDerivedStats(character: Character): void {
    const { abilities, classes, species } = character;

    // Reset/Recalc basic stats
    // Note: This function mutates the character object in place.

    const level = classes.reduce((sum, c) => sum + c.level, 0);
    character.level = level;

    // 1. HP Calculation
    // Logic: First class (level 1) gets Max HP + Con.
    // Subsequent levels get (Average HP or Roll) + Con. 
    // Average HP for d6=3.5 (4), d8=4.5 (5), d10=5.5 (6), d12=6.5 (7).
    // Let's use fixed average for simplicity: Floor(Die/2) + 1. (e.g. d10 -> 6).

    let totalHp = 0;
    const conMod = getAbilityModifier(abilities.con);

    classes.forEach((clsLevel, index) => {
        const classData = CLASSES[clsLevel.className];
        if (!classData) return;

        if (index === 0) {
            // Level 1 logic
            totalHp += classData.startHp + conMod;
            // Add remaining levels of first class if user set level > 1 in the tuple
            if (clsLevel.level > 1) {
                const perLevel = Math.floor(classData.hpPerLevel / 2) + 1;
                totalHp += (perLevel + conMod) * (clsLevel.level - 1);
            }
        } else {
            // Multiclass levels
            const perLevel = Math.floor(classData.hpPerLevel / 2) + 1;
            totalHp += (perLevel + conMod) * clsLevel.level;
        }
    });

    character.hp = totalHp;

    // 2. Defenses
    // Reflex = 10 + Level + Dex Mod + Class Bonus (Max) + Size Mod
    // Fort = 10 + Level + Con Mod + Class Bonus (Max) + Equipment
    // Will = 10 + Level + Wis Mod + Class Bonus (Max)

    const dexMod = getAbilityModifier(abilities.dex);
    // Con mod defined above
    const wisMod = getAbilityModifier(abilities.wis);

    let maxRef = 0;
    let maxFort = 0;
    let maxWill = 0;

    classes.forEach(clsLevel => {
        const cls = CLASSES[clsLevel.className];
        if (cls && cls.defenseBonuses) {
            if ((cls.defenseBonuses.reflex || 0) > maxRef) maxRef = cls.defenseBonuses.reflex || 0;
            if ((cls.defenseBonuses.fortitude || 0) > maxFort) maxFort = cls.defenseBonuses.fortitude || 0;
            if ((cls.defenseBonuses.will || 0) > maxWill) maxWill = cls.defenseBonuses.will || 0;
        }
    });

    character.defenses = {
        reflex: 10 + level + dexMod + maxRef,
        fortitude: 10 + level + conMod + maxFort,
        will: 10 + level + wisMod + maxWill
    };

    // Size check
    if (species && SPECIES[species]) {
        const s = SPECIES[species];
        if (s.size === 'Small') {
            character.defenses.reflex += 1;
            // Stealth check bonus too?
        }
        else if (s.size === 'Large') {
            character.defenses.reflex -= 1;
        }
        else if (s.size === 'Tiny') {
            character.defenses.reflex += 2;
        }
    }
}

export function calculateAttack(character: Character, weaponType: 'Melee' | 'Ranged' | 'Simple' | 'Pistol' | 'Rifle' | 'Heavy'): number {
    const bab = character.classes[0].className === 'Jedi' || character.classes[0].className === 'Soldier' ? character.level : Math.floor(character.level * 0.75);

    let mod = 0;
    if (weaponType === 'Melee' || weaponType === 'Simple') { // Simple often melee
        mod = getAbilityModifier(character.abilities.str);
    } else {
        mod = getAbilityModifier(character.abilities.dex);
    }

    // Size modifier
    let sizeMod = 0;
    if (character.species && SPECIES[character.species]) {
        const s = SPECIES[character.species];
        if (s.size === 'Small') sizeMod = 1;
        if (s.size === 'Tiny') sizeMod = 2;
        if (s.size === 'Large') sizeMod = -1;
    }

    // Feat bonuses (Weapon Focus) - simplified check
    const hasFocus = character.feats.some(f => f.includes('Weapon Focus'));
    const featBonus = hasFocus ? 1 : 0;

    return bab + mod + sizeMod + featBonus;
}

export function applyRest(character: Character): void {
    // 8-hour rest logic
    // 1. Recover HP = Level
    character.hp = Math.min(character.hp + character.level, getMaxHp(character));

    // 2. Reset Force Points (if Force Boon or similar, usually logic is complex, for now reset to max for level? No, they don't reset daily in Saga, they reset per level up. 
    // Wait, Saga Edition Force Points replenish at end of encounter if spent? No.
    // "Force Points are replenished when the character gains a new level." 
    // Actually, "Daily" abilities reset. 
    // Let's stick to HP and maybe condition track.

    // 3. Condition Track
    // "Natural Healing: 8 hours rest moves +1 step up condition track"
    // We don't store track index in Character yet explicitly, but let's assume UI handles it or we add it.

    // Correction: Force points do NOT reset on rest. Destiny points do NOT reset.
    // Ability damage heals? Yes, 1 point per day.
}

export function getMaxHp(character: Character): number {
    // Re-calculate max HP based on current data
    // This replicates logic in calculateDerivedStats but returns value
    // Optimized: assume calculated derivedstats set character.hp to max initially? 
    // No, character.hp is current HP. We need a maxHp field or recalc.
    // implementation simplification: we will store maxHp in Character type or recalc it.
    // For now, let's recalc.
    let totalHp = 0;
    const conMod = getAbilityModifier(character.abilities.con);

    character.classes.forEach((clsLevel, index) => {
        const classData = CLASSES[clsLevel.className];
        if (!classData) return;

        if (index === 0) {
            totalHp += classData.startHp + conMod;
            if (clsLevel.level > 1) {
                const perLevel = Math.floor(classData.hpPerLevel / 2) + 1;
                totalHp += (perLevel + conMod) * (clsLevel.level - 1);
            }
        } else {
            const perLevel = Math.floor(classData.hpPerLevel / 2) + 1;
            totalHp += (perLevel + conMod) * clsLevel.level;
        }
    });
    return totalHp;
}

export function getConditionPenalty(condition: number | undefined): number {
    switch (condition) {
        case 1: return -1;
        case 2: return -2;
        case 3: return -5;
        case 4: return -10;
        case 5: return -10; // Helpless, usually no actions, but for rolls -10 is a safe fallback
        default: return 0;
    }
}
