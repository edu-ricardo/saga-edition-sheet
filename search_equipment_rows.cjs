const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Search "Blaster pistol" & "Armored flight suit" in Data sheet ---');

for (let r = 0; r < 300; r++) {
    const row = data[r];
    if (row) {
        // Check first 5 cols
        for (let c = 0; c < 5; c++) {
            if (row[c] === 'Blaster pistol') {
                console.log(`Found "Blaster pistol" at Row ${r}, Col ${c}`);
                // Dump row
                row.forEach((val, i) => { if (val) console.log(`  Col ${i}: ${val}`); });
            }
            if (row[c] === 'Armored flight suit') {
                console.log(`Found "Armored flight suit" at Row ${r}, Col ${c}`);
                // Dump row
                row.forEach((val, i) => { if (val) console.log(`  Col ${i}: ${val}`); });
            }
        }
    }
}
