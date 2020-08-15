const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, 'data.txt');

const readFile = (err, data) => console.log(`Callback: ${data.toString()}`);

// Assíncrono - queue
console.log('Start callback');
fs.readFile(dir, {}, (err, data) => readFile(err, data)); // receber e passar o valor
fs.readFile(dir, {}, readFile); // propagar o valor
console.log('End callback');

// Síncrono - stack
console.log('\nStart Sync');
const res = fs.readFileSync(dir, {}, () => { });
console.log(res.toString());
console.log('End Sync\n');
