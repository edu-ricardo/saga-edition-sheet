const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Inspect Medpac Row (122) Cols 180-220 ---');
const row = data[122];
if (row) {
    row.slice(180, 220).forEach((val, i) => {
        const colIdx = 180 + i;
        if (val) console.log(`Col ${colIdx} (${XLSX.utils.encode_col(colIdx)}): ${val}`);
    });
}
