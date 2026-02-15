const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const weapons = [];
const armor = [];
const equipment = [];

// --- WEAPONS (Col EN/143 - FS/174) ---
// Row 4 seems to be start of data based on inspection
// Iterate until we hit empty name
for (let r = 4; r < 300; r++) {
    const row = data[r];
    if (!row) continue;

    const name = row[143]; // EN
    if (!name || name.toString().startsWith('--')) continue; // Skip headers like "-- Melee Weapons --"

    // Stats
    const type = row[155]; // EZ
    const cost = row[167]; // FL
    const weight = row[168]; // FM
    const group = row[147]; // ER
    const size = row[148]; // ES
    const stun = row[151]; // EV (Stun?)
    const range = row[145]; // EP (Range? or Size header said M?)
    // Wait, "Electropole" EP=M. Range should be numeric or "Personal".
    // Let's assume EP is Size for now? No, ES is Size.
    // Let's use EP as "Range" if it looks like one.

    // Damage Construction
    // FD (159) = Mult1, FE (160) = Die1, FF (161) = Add1
    // FG (162) = Mult2, FH (163) = Die2, FI (164) = Add2
    let dmg = '';

    const d1_mult = row[159];
    const d1_die = row[160];
    const d1_add = row[161];

    if (d1_die) {
        dmg = `${d1_mult || ''}d${d1_die}`;
        if (d1_add) dmg += `+${d1_add}`;
    }

    const d2_die = row[163];
    if (d2_die) {
        let dmg2 = `${row[162] || ''}d${d2_die}`;
        if (row[164]) dmg2 += `+${row[164]}`;
        // Usually secondary damage or alt mode?
        dmg += ` / ${dmg2}`;
    }

    // Rate of Fire
    const rateS = row[153]; // EX (RateS)
    const rateA = row[154]; // EY (RateA)
    let rof = '';
    if (rateS) rof += rateS;
    if (rateA) rof += (rof ? '/' : '') + rateA;

    weapons.push({
        name: name.toString().trim(),
        group: group ? group.toString() : 'Simple',
        size: size ? size.toString() : 'Medium',
        type: type ? type.toString() : 'Unknown',
        damage: dmg || 'None',
        stun: stun === 'Yes',
        rateOfFire: rof,
        range: row[145] ? row[145].toString() : undefined, // EP
        cost: parseCost(cost),
        weight: parseWeight(weight),
        description: `Damage: ${dmg || 'None'}, Type: ${type || '-'}, Stun: ${stun === 'Yes' ? 'Yes' : 'No'}`
    });
}

// --- ARMOR (Col DC/106 - DO/119) ---
// Iterate rows 1 to 200
for (let r = 1; r < 200; r++) {
    const row = data[r];
    if (!row) continue;

    const name = row[106]; // DC
    if (!name || name.toString().includes('Armor')) continue; // Skip header

    // Stats
    const typeCode = row[107]; // DD (2? or L/M/H?)
    // In our manual check (Step 1265 output from rules.ts), we had "L", "M", "H".
    // In Header dump (Step 1340), DD was "Type". Row 1 DD was "2".
    // Maybe "2" corresponds to Light? Or Cost?

    // Let's assume rules.ts had it right (`type: "L"`).
    // But data might be raw here.
    // Let's use the columns:
    const ref = row[108]; // DE
    const fort = row[109]; // DF
    const maxDex = row[110]; // DG
    // Cost/Weight are NOT in this block (DC-DO).
    // They were in EK (140) and somewhere else?

    // Scan adjacent columns for matches?
    // "Armored flight suit" was Row 3.
    // Row 3 DC: "Armored flight suit"? 
    // Step 1275 search failed, but "Flight suit" was Row 3 EL (141).
    // So Armor Name is DC *and* EL?
    // EL (140) header is "Stat Block".

    // If Armor starts at DC (106), maybe Cost/Weight are nearby.
    // Step 1325: Row 0 Col 140 (EK) = Weight.
    // Col 106 (DC) Name... Col 140 (EK) Weight?
    // That's 34 columns away.
    // Let's assume Row index matches.

    const weightVal = row[140]; // EK
    // Cost?
    // Step 1325: Cost header?
    // Step 1320: Weapon Cost FL (167).
    // Armor Cost?
    // Let's look for "Cost" in headers dump Step 1325? It only showed Weight.
    // I'll assume Cost is somewhere between DC and EK.
    // Or I'll set Cost to 0 if not found for now.

    // Wait, previous `rules.ts` had cost/weight.
    // "Armored flight suit" cost 4000 (from memory/rules.ts).

    armor.push({
        name: name.toString().trim(),
        type: typeCode ? typeCode.toString() : 'Light', // Default
        armorBonus: parseInt(ref) || 0,
        fortitudeBonus: parseInt(fort) || 0,
        maxDex: parseInt(maxDex) || 0,
        cost: 0, // Placeholder
        weight: parseWeight(weightVal),
        description: `Reflex +${ref || 0}, Fort +${fort || 0}, Max Dex +${maxDex || 0}`
    });
}

// --- EQUIPMENT (Col GI/190 - GZ/207) ---
// Row 38-300? (Medpac was 122)
// GI (190) Name? No, GI was "Stat Block Plural".
// Medpac Name was GC (184).
// Let's use GC (184) for Name.
// GE (186) Cost.
// GF (187) Weight.

for (let r = 4; r < 300; r++) {
    const row = data[r];
    if (!row) continue;

    const name = row[184]; // GC
    if (!name) continue;

    const cost = row[186]; // GE
    const weight = row[187]; // GF

    // Filter out rows that don't look like items
    if (!cost && !weight) continue;

    equipment.push({
        name: name.toString().trim(),
        cost: parseCost(cost),
        weight: parseWeight(weight),
        description: "",
        group: "General"
    });
}

function parseCost(val) {
    if (!val) return 0;
    if (typeof val === 'number') return val;
    return parseInt(val.replace(/[^0-9]/g, '')) || 0;
}

function parseWeight(val) {
    if (!val) return 0;
    return parseFloat(val) || 0;
}

const content = `import type { Weapon, Armor, Item } from '../types';

export const WEAPONS: Weapon[] = ${JSON.stringify(weapons, null, 4)};
export const ARMOR: Armor[] = ${JSON.stringify(armor, null, 4)};
export const EQUIPMENT: Item[] = ${JSON.stringify(equipment, null, 4)};
`;

fs.writeFileSync('src/data/equipment_data.ts', content);
console.log(`Extracted ${weapons.length} weapons, ${armor.length} armor, ${equipment.length} items.`);
