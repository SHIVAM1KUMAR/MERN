console.log("Welcome to express.js");

const express=require("express");
const cookieParser = require('cookie-parser');


const app=express();
app.use(cookieParser());

app.get("/example",(req,res)=>{
    const cookies=req.cookies;
    console.log(cookies);
    res.cookie("name","sk");
    res.cookie("age","32");
    res.send("Example cookies route");
});













// const admin=express.Router();
// const student=express.Router();

// app.use("/admin",admin);
// app.use("/student",student);

// admin.get("/home",(req,res,next)=>{
//     console.log(req.url);
//     console.log(req.baseUrl);
//     console.log(req.originalUrl);
//     console.log(req.path);
//     res.send("Admin home page route");
// });

// student.get("/home",(req,res,next)=>{
//     console.log(req.baseUrl);
//     console.log(req.originalUrl);
//     console.log(req.path);
//     res.send("Student home page route");
// });

// app.get("/home",(req,res,next)=>{
//     console.log(req.baseUrl);
//     console.log(req.originalUrl);
//     console.log(req.path);
//     res.send("Common home page route");
// });



app.listen(8000,()=>{
    console.log("server is runningon port 8000");
});


















// app.get("/users",(req,res)=>{
//     res.send("user List");
// });

// app.get("/users/:id",(req,res)=>{
//  console.log(req.params);



//  console.log(req.query);


//  res.send("user details");
// });




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

