const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Inspect Data Sheet Headers (Cols 100-250) ---');
const start = 100;
const end = 250;

for (let r = 0; r < 3; r++) {
    const row = data[r];
    if (row) {
        row.slice(start, end).forEach((val, i) => {
            const colIdx = start + i;
            if (val) console.log(`Row ${r} Col ${colIdx} (${XLSX.utils.encode_col(colIdx)}): ${val}`);
        });
    }
}
