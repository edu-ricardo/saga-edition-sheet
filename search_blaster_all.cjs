const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheetNames = workbook.SheetNames;

sheetNames.forEach(name => {
    const sheet = workbook.Sheets[name];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    for (let r = 0; r < 300; r++) {
        const row = data[r];
        if (row) {
            row.forEach((cell, c) => {
                if (c < 50 && typeof cell === 'string' && cell.toLowerCase().includes('blaster')) {
                    console.log(`Found "Blaster" in sheet "${name}", Row ${r}, Col ${c}: "${cell}"`);
                }
            });
        }
    }
});
