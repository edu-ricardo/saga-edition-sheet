const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');

function inspectSheet(name) {
    const sheet = workbook.Sheets[name];
    if (!sheet) {
        console.log(`Sheet "${name}" not found.`);
        return;
    }
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log(`--- Inspecting "${name}" : First 20 rows ---`);
    for (let r = 0; r < 20; r++) {
        const row = data[r];
        if (row) {
            console.log(`Row ${r}: ${JSON.stringify(row)}`);
        }
    }
}

inspectSheet('Weapons');
inspectSheet('Armor and Defenses');
inspectSheet('Equipment');
