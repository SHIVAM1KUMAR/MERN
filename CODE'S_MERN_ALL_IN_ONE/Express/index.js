console.log("Welcome to express.js");

const express=require("express");
const app=express();

app.get("/users",(req,res)=>{
    res.send("user List");
});

app.get("/users/:id",(req,res)=>{
 console.log(req.params);

 res.send("user details");
});










//app.use(express.raw());

// app.get("/",(req,res)=>{
//     res.send("This is  home page");
// });
//app.post("/example",(req,res,next)=>{
//     let data=req.body;
//     console.log(data);
//     res.send("This is responeses example");
// });
// app.post("/example",(req,res,next)=>{
//     res.send("This is  post method");
// });

// app.put("/example",(req,res,next)=>{
//     res.send("This is  put method");
// });

// app.patch("/example",(req,res,next)=>{
//     res.send("This is  patch method");
// });

// app.delete("/example",(req,res,next)=>{
//     res.send("This is  delete method");
// });

app.listen(8000,()=>{
    console.log("server is runningon port 8000");
});