const XLSX = require('xlsx');
const workbook = XLSX.readFile('../SagaForge 1.53.xlsm');

console.log('--- Workbook Defined Names ---');
if (workbook.Workbook && workbook.Workbook.Names) {
    workbook.Workbook.Names.forEach(n => {
        console.log(`Name: ${n.Name}, Ref: ${n.Ref}`);
    });
} else {
    console.log('No Names found.');
}
