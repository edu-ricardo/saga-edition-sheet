const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Inspect Weapon Table Headers (Data Row 0-2, Cols EN-FS) ---');
// EN is 143. FS is 174.
const startCol = 140;
const endCol = 180;

for (let r = 0; r < 5; r++) {
    const row = data[r];
    if (row) {
        const slice = row.slice(startCol, endCol);
        // Print with adjusted index
        slice.forEach((val, i) => {
            if (val) console.log(`Row ${r} Col ${startCol + i} (${XLSX.utils.encode_col(startCol + i)}): ${val}`);
        });
    }
}

console.log('--- Inspect First Weapon Row (Row 2) ---');
const row2 = data[2];
if (row2) {
    row2.slice(startCol, endCol).forEach((val, i) => {
        if (val) console.log(`Row 2 Col ${startCol + i} (${XLSX.utils.encode_col(startCol + i)}): ${val}`);
    });
}
