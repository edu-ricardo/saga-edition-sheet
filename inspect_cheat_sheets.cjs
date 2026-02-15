const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');

function inspectSheet(name) {
    const sheet = workbook.Sheets[name];
    if (!sheet) {
        console.log(`Sheet "${name}" not found.`);
        return;
    }
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log(`--- Inspecting "${name}" ---`);
    for (let r = 0; r < 50; r++) {
        const row = data[r];
        if (row && row.length > 0) {
            const items = row.map((c, i) => c ? `[${i}]:${c}` : '').filter(c => c).join(', ');
            if (items) console.log(`Row ${r}: ${items}`);
        }
    }
}

inspectSheet('Weapons Cheat Sheet');
inspectSheet('Weapons Cheat Sheet (2)');
