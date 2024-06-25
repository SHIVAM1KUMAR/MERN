const express = require('express')
const path =require('path')
const app = express()
const port = 3000

// const sMiddleware =(req,res,next)=>{
//   console.log(req)
//   next()
// }
app.use(express.static(path.join(__dirname,"public")))
//app.use(sMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})
app.get('/about', (req, res) => {
    //res.send('ABOUT PAGE')
    //res.sendFile(path.join(__dirname,'index.html'))
    //res.status(500)
    res.json({"shivam":51})

  })

 
app.listen(port, () => {
 console.log(`Example app listening on port http://localhost:${port}`)
//console.log(`Example app listening on port ${port}`)
})