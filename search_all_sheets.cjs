const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheetNames = workbook.SheetNames;

console.log('Sheets:', sheetNames);

sheetNames.forEach(name => {
    const sheet = workbook.Sheets[name];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    for (let r = 0; r < 100; r++) {
        const row = data[r];
        if (row) {
            row.forEach((cell, c) => {
                if (typeof cell === 'string' && cell.toLowerCase().includes('blaster pistol')) {
                    console.log(`Found "Blaster pistol" in sheet "${name}", Row ${r}, Col ${c}`);
                }
            });
        }
    }
});
