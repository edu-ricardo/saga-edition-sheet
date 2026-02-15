const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Inspect Armor Row (Row 11 ish) ---');
// Scan rows 10-15
for (let r = 10; r < 15; r++) {
    const row = data[r];
    if (row && row[0] === 'Armor') { // Armor header might be col A
        console.log(`Row ${r} found Armor header.`);
    }
    if (row && row[1] === 'Armored flight suit') { // Example armor
        console.log(`Row ${r} is Armored flight suit. Dumping cols:`);
        row.forEach((val, i) => {
            if (val) console.log(`Col ${i}: ${val}`);
        });
    }
}

console.log('--- Inspect Weapon Row (Row 44 ish) ---');
// Scan rows 40-50
for (let r = 40; r < 60; r++) {
    const row = data[r];
    if (row && row[1] === 'Blaster pistol') { // Example weapon
        console.log(`Row ${r} is Blaster pistol. Dumping cols:`);
        row.forEach((val, i) => {
            if (val) console.log(`Col ${i}: ${val}`);
        });
        break;
    }
}
