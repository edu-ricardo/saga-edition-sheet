const fs = require('fs');

const content = fs.readFileSync('src/data/rules.ts', 'utf-8');
const lines = content.split('\n');

// Keep lines 0 to 4656 (inclusive 0-based index means 0 to 4655)
// Line 4655 was "]"
// Line 4657 was "export const ARMOR..."
// So we want to keep 0...4655 (0-based) which is lines 1...4656 (1-based)
// The output of manage_rules_file said Line 4657 is ARMOR.
// So we keep until 4656.

const newContent = lines.slice(0, 4656).join('\n');
fs.writeFileSync('src/data/rules.ts', newContent);
console.log('Truncated rules.ts');
