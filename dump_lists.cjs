const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Lists'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Inspect Lists Sheet ---');
for (let r = 0; r < 50; r++) {
    const row = data[r];
    if (row) {
        // Filter out empty lines
        if (row.length > 0) {
            const items = row.map((c, i) => c ? `[${i}]:${c}` : '').filter(c => c).join(', ');
            if (items) console.log(`Row ${r}: ${items}`);
        }
    }
}
