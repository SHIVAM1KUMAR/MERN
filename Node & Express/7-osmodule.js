const os =require('os')



//info about current user
const user = os.userInfo()
console.log(user)



//methods return the system uptime in second
console.log(`Te System uptime is ${os.uptime()} second`);

const currentOs ={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);

