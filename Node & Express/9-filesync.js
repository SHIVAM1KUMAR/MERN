const {readFileSync ,writeFileSync} =require('fs')
// const fs =require('fs');
// fs.read

const first =readFileSync('./Content/First.txt','utf8');
const First =readFileSync('./Content/Second.txt','utf8');
console.log(first,First)

writeFileSync(
    './Content/Result-sync.txt',
    `hey there is result: ${first},${Second}`
)