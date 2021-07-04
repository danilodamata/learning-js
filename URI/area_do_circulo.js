var input = require('fs').readFileSync('stdin.txt', 'utf8');

// A área de uma circunferência é: área = pi * (raio**2)
let raio = parseFloat(input)
let PI = 3.14159;
let area = PI * (raio**2)
console.log(`A=${area.toFixed(4)}`)




