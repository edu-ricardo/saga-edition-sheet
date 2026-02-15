const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Scan Data Sheet Headers (Rows 0-5) ---');
for (let r = 0; r < 5; r++) {
    const row = data[r];
    if (row) {
        row.forEach((val, c) => {
            if (typeof val === 'string') {
                const s = val.toLowerCase();
                if (s.includes('armor') || s.includes('cost') || s.includes('weight') || s.includes('heal')) {
                    console.log(`Row ${r} Col ${c} (${XLSX.utils.encode_col(c)}): ${val}`);
                }
            }
        });
    }
}
