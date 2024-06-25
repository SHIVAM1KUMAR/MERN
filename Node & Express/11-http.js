const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Home page')
    }
    if(req.url ==='/about'){
        res.end('here is history of mystory')
    }
res.end(`
    <h1>Oops!<h1>
    <p>we cant find what you  are serching</p>
    <a href="/">back home</a>
    `)

})

server.listen(5000)