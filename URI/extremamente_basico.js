let input = require('fs').readFileSync('stdin.txt', 'utf-8');

let values = input.split('\n');

let A = parseInt(values[0]);
let B = parseInt(values[1]);
let X = A + B;

console.log(`X = ${X}`)


