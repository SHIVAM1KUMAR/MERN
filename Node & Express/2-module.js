//Commonjs,every file is module (by default)

//Modules-encapsulation code (only share mimimum)


// const john = 'john'
// const peter  ='peter'



// const sayHi =(name)=>{
//     console.log(`Hello there ${name}`);
// }

const names =require('./3-modulebasic')
const sayHi =require('./4-utils')
const data =require('./5-Alternative-flavour')
require('./6-mind-granate')

console.log(names)

// sayHi('Shivam')
// sayHi(names.john)
// sayHi(names.peter)
 console.log(data)