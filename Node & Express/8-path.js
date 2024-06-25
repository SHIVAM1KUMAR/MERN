const path = require('path')
console.log(path.sep);

const filePath =path.join('/Content','Sub','txt.txt')
console.log(filePath)

const base =path.basename(filePath)
console.log(base)


const absolute =path.resolve(__dirname,'Content','Sub','txt.txt');
console.log(absolute)