const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');

function searchSheet(name) {
    const sheet = workbook.Sheets[name];
    if (!sheet) return;
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log(`--- Searching "${name}" ---`);
    for (let r = 0; r < 200; r++) {
        const row = data[r];
        if (row) {
            for (let c = 0; c < 100; c++) {
                if (row[c] && row[c].toString().includes('Blaster pistol')) {
                    console.log(`Found "Blaster pistol" in ${name} Row ${r} Col ${c}`);
                    // Dump row
                    console.log(JSON.stringify(row));
                    return; // Found it
                }
            }
        }
    }
}

searchSheet('Data');
searchSheet('Lists');
