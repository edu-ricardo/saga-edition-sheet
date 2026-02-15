const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Inspect Armor Headers (DC-DO) ---');
const armorStart = 106; // DC
const armorEnd = 120; // DO

for (let r = 0; r < 2; r++) {
    const row = data[r];
    if (row) {
        row.slice(armorStart, armorEnd).forEach((val, i) => {
            if (val) console.log(`Row ${r} Col ${armorStart + i} (${XLSX.utils.encode_col(armorStart + i)}): ${val}`);
        });
    }
}

console.log('--- Inspect Equipment Headers (GI-GZ) ---');
const equipStart = 190; // GI
const equipEnd = 208; // GZ

for (let r = 0; r < 2; r++) {
    const row = data[r];
    if (row) {
        row.slice(equipStart, equipEnd).forEach((val, i) => {
            if (val) console.log(`Row ${r} Col ${equipStart + i} (${XLSX.utils.encode_col(equipStart + i)}): ${val}`);
        });
    }
}
