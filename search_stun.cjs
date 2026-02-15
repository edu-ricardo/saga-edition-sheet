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
                if (typeof cell === 'string' && cell.toLowerCase().includes('stun setting')) {
                    console.log(`Found "Stun setting" in ${name} Row ${r} Col ${c}: "${cell}"`);
                }
            });
        }
    }
});
