const fs = require('fs');

const content = fs.readFileSync('src/data/rules.ts', 'utf-8');
const lines = content.split('\n');

console.log(`Total lines: ${lines.length}`);

lines.forEach((line, i) => {
    if (line.trim().startsWith('export const')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});
