const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');

console.log('--- Hidden Sheets? ---');
if (workbook.Workbook) {
    workbook.Workbook.Sheets.forEach(s => {
        if (s.Hidden !== 0) {
            console.log(`Sheet "${s.name}" is Hidden (State: ${s.Hidden})`);
        }
    });
}

const sheet = workbook.Sheets['Data'];
// Check for comments on GC122 (Medpac)
// Cell address is encoded as C122? No, GC is col 184.
// decoding: GC is 184. Row is 122 (index 122 if 0-based? No, strict Excel refs are 1-based)
// Data!GC123 (row 122 index is row 123)
const cellRef = 'GC123';
const cell = sheet[cellRef];
if (cell) {
    console.log(`Cell ${cellRef} Value:`, cell.v);
    if (cell.c) {
        console.log(`Cell ${cellRef} Comment:`, JSON.stringify(cell.c));
    } else {
        console.log(`Cell ${cellRef} has no comment.`);
    }
} else {
    console.log(`Cell ${cellRef} not found.`);
}
