import type { Character } from '../types';
import { SPECIES, CLASSES, SKILLS } from '../data/rules';

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
    character.hp = getMaxHp(character);

    // 2. Defenses
    // Reflex = 10 + Level + Dex Mod + Class Bonus (Max) + Size Mod
    // Fort = 10 + Level + Con Mod + Class Bonus (Max) + Equipment
    // Will = 10 + Level + Wis Mod + Class Bonus (Max)

    const dexMod = getAbilityModifier(abilities.dex);
    const conMod = getAbilityModifier(abilities.con);
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

    // Feat / Talent Bonuses
    let featRef = 0;
    let featFort = 0;
    let featWill = 0;

    // "Improved Defenses" or similar feats
    if (character.feats.includes('Improved Defenses')) {
        featRef += 1;
        featFort += 1;
        featWill += 1;
    }

    // "Force Boon" logic could go here if it affected retrieval, but usually it's just max points.
    // Force Points: 5 + floor(Level / 2). "Force Boon" adds 3.
    let baseFp = 5 + Math.floor(level / 2);
    if (character.feats.includes('Force Boon')) {
        baseFp += 3;
    }
    // Note: We don't overwrite current FP unless it's a reset/init scenario, 
    // but the character object structure has `forcePoints` as current value.
    // We might want to store `maxForcePoints` or handle this in a reset function.
    // For now, let's leave FP management manual or to the level-up logic.

    character.defenses = {
        reflex: 10 + level + dexMod + maxRef + featRef,
        fortitude: 10 + level + conMod + maxFort + featFort,
        will: 10 + level + wisMod + maxWill + featWill
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

export function getSkillBonus(character: Character, skillName: string): number {
    const trained = character.skills.includes(skillName);
    const skillData = SKILLS.find(s => s.name === skillName);
    if (!skillData) return 0;

    const ability = character.abilities[skillData.ability];
    const mod = getAbilityModifier(ability);
    const halfLevel = Math.floor(character.level / 2);

    // Skill Focus Feat
    // Skill Focus Feat
    // Check if the specific Skill Focus for this skill exists
    const skillFocusBonus = character.feats.includes(`Skill Focus (${skillName})`) ? 5 : 0;

    return halfLevel + mod + (trained ? 5 : 0) + skillFocusBonus;
}

export function applyRest(character: Character): void {
    // 8-hour rest logic
    // 1. Recover HP = Level
    character.hp = Math.min(character.hp + character.level, getMaxHp(character));
}

export function getMaxHp(character: Character): number {
    let totalHp = 0;
    const conMod = getAbilityModifier(character.abilities.con);

    // Toughness Feat: +1 HP per level
    const hasToughness = character.feats.includes('Toughness');
    const toughnessBonus = hasToughness ? character.level : 0;

    character.classes.forEach((clsLevel, index) => {
        const classData = CLASSES[clsLevel.className];
        if (!classData) return;

        if (index === 0) {
            // Level 1 logic: Max Hit Die + Con
            totalHp += classData.startHp + conMod;

            // Remaining levels of first class
            if (clsLevel.level > 1) {
                const perLevel = Math.floor(classData.hpPerLevel / 2) + 1;
                // Saga Rule: Minimum 1 HP per level gain
                const gained = Math.max(1, perLevel + conMod);
                totalHp += gained * (clsLevel.level - 1);
            }
        } else {
            // Multiclass / Prestige levels
            const perLevel = Math.floor(classData.hpPerLevel / 2) + 1;
            // Saga Rule: Minimum 1 HP per level gain
            const gained = Math.max(1, perLevel + conMod);
            totalHp += gained * clsLevel.level;
        }
    });

    return totalHp + toughnessBonus;
}

export function getConditionPenalty(condition: number | undefined): number {
    switch (condition) {
        case 1: return -1;
        case 2: return -2;
        case 3: return -5;
        case 4: return -10;
        case 5: return -10;
        default: return 0;
    }
}

export function getBabProgression(className: string): number {
    const cls = CLASSES[className];
    return cls?.babProgression || 0.75;
}

export function calculateBab(character: Character): number {
    let totalBab = 0;
    character.classes.forEach(cls => {
        const progression = getBabProgression(cls.className);
        totalBab += Math.floor(cls.level * progression);
    });
    return totalBab;
}

export interface PrereqCheckResult {
    eligible: boolean;
    reasons: string[];
}

export function checkPrerequisites(character: Character, targetClass: any): PrereqCheckResult {
    const reasons: string[] = [];
    if (!targetClass.prerequisites) return { eligible: true, reasons: [] };

    const p = targetClass.prerequisites;
    const totalLevel = character.classes.reduce((sum, c) => sum + c.level, 0);

    // 1. Level Check
    if (p.level && totalLevel < p.level) {
        reasons.push(`Minimum Level ${p.level}`);
    }

    // 2. BAB Check
    if (p.bab) {
        const currentToalBab = calculateBab(character);
        if (currentToalBab < p.bab) {
            reasons.push(`Base Attack Bonus +${p.bab} (Current: +${currentToalBab})`);
        }
    }

    // 3. Feats Check
    if (p.feats) {
        const missingFeats = p.feats.filter((reqFeat: string) => !character.feats.includes(reqFeat));
        if (missingFeats.length > 0) {
            reasons.push(`Feats: ${missingFeats.join(', ')}`);
        }
    }

    // 4. Skills Check (Trained Skills)
    if (p.skills) {
        const missingSkills = p.skills.filter((reqSkill: string) => !character.skills.includes(reqSkill));
        if (missingSkills.length > 0) {
            reasons.push(`Trained Skills: ${missingSkills.join(', ')}`);
        }
    }

    // 5. Talents Check
    if (p.talents) {
        const missingTalents = p.talents.filter((reqTalent: string) => !character.talents.includes(reqTalent));
        if (missingTalents.length > 0) {
            reasons.push(`Talents: ${missingTalents.join(', ')}`);
        }
    }

    // 6. Dark Side Check
    if (p.darkSide === true) {
        if (character.darkSideScore <= 0) {
            reasons.push(`Must have Dark Side Score > 0`);
        }
    }

    // 7. Classes Check (e.g. Jedi Knight for Jedi Master)
    if (p.classes) {
        const missingClasses = p.classes.filter((reqClass: string) => !character.classes.some(c => c.className === reqClass));
        if (missingClasses.length > 0) {
            reasons.push(`Class levels: ${missingClasses.join(', ')}`);
        }
    }

    return {
        eligible: reasons.length === 0,
        reasons
    };
}

export function getAvailableTalents(character: Character): number {
    let total = 0;
    character.classes.forEach(cls => {
        // Standard: 1st and every odd level (1, 3, 5...) => ceil(level / 2)
        // Exceptions could be handled here if needed
        total += Math.ceil(cls.level / 2);
    });
    return total;
}

export function getAvailableFeats(character: Character): number {
    // 1. General Character Feats (1, 3, 6, 9, 12, 15, 18...)
    // Level 1 + floor(level / 3)
    let general = 1 + Math.floor(character.level / 3);

    // Human Bonus
    if (character.species === 'Human') general += 1;

    // 2. Class Bonus Feats
    // Base Classes (Heroic): Jedi, Noble, Scoundrel, Scout, Soldier get feats at even levels (2, 4, 6...)
    // Prestige Classes: Generally do NOT get standard bonus feats (they get special abilities or talents)
    const baseClasses = ['Jedi', 'Noble', 'Scoundrel', 'Scout', 'Soldier'];
    let classBonus = 0;

    character.classes.forEach(cls => {
        if (baseClasses.includes(cls.className)) {
            classBonus += Math.floor(cls.level / 2);
        }
    });

    return general + classBonus;
}

export function getMaxAbilityBoosts(character: Character): number {
    // +1 to two stats at levels 4, 8, 12, 16, 20
    return Math.floor(character.level / 4);
}
