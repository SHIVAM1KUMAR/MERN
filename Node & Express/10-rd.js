const {readFile} =require('fs')
console.log('started')

readFile('./Content/First.txt','utf8',(err,result)=>{
 if(err){
    console.log(err)
    return
 }
 console.log(result)

//const second =result
// writeFile(
//     '/Content/result-async.txt',
//     `here is result ${First},${Second}`
// ,(err,result)=>{
// if(err){
//     console.log(err);
//     return;
// }
console.log('Completed')
})
console.log('starting ');

//})




