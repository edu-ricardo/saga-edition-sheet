const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');
const sheet = workbook.Sheets['Data'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('--- Search "Medpac" in Data Sheet ---');
for (let r = 0; r < 300; r++) {
    const row = data[r];
    if (row) {
        row.forEach((cell, c) => {
            if (typeof cell === 'string' && cell.toLowerCase().includes('medpac')) {
                console.log(`Found "Medpac" in Row ${r} Col ${c} (${XLSX.utils.encode_col(c)}): "${cell}"`);
                // Dump row
                row.forEach((v, i) => { if (v) console.log(`  Col ${i} (${XLSX.utils.encode_col(i)}): ${v}`); });
            }
        });
    }
}
