var fs = require('fs')  

//console.log(process.argv[2]);
// console.log( fs.readFileSync(process.argv[2]).toString().split('\n').length - 1 );    or...
console.log( fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1 );