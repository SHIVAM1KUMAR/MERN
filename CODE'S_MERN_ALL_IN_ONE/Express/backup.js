console.log("Welcome to express.js");

const express=require("express");
//const cookieParser = require('cookie-parser');
const mongodb=require("mongodb");


const app=express();
app.use(express.json());

//  const connectionUrl="mongodb://localhost:27017";
 const client= new mongodb.MongoClient("mongodb://127.0.0.1:27017");

 client
 .connect()
 .then(()=>console.log("Database connection is sucessful"))
 .catch((error)=>console.log(error));

 const db=client.db("schoolDb");

 const student=db.collection("student"); 

// add student
app.post("/student",(req,res,next)=>{
    const{name,email,age,dep}=req.body;
    student
  //  .insertMany(req.body)
    .insertMany({
          name:name,
          email:email,
          age:age,
          dep:dep,
  })
  .then(() => res.status(201).send("student added succesfully"))
  .catch((error)=>res.status(500).send(error.message));
});


//get student
app.get("/student",(req,res,next)=>{
    student.findOne({name:"Shivam"})
    .then((data)=>res.status(200).json(data))
    .catch((error)=> res.status(500).send(error.message));
})




// const errorMiddleware=(error,req,res,next)=>{
//     res.status(500).send(error.message);
// };

// app.use(errorMiddleware);



app.listen(8000,()=>{
    console.log("server is runningon port 8000");
});







// app.use(cookieParser());
// app.set("view engine","ejs");


// app.get("/example",(req,res)=>{
//    // res.send("<h1>HEllo</h1>");
// res.render("pages/home.ejs");



// });




// app.get("/test",(req,res)=>{
//     res.send("test restponse");
// });

// app.get("/example",(req,res)=>{
//    //res.location("/xyz");
//    res.set("title","express");
//  res.json({
//     name:"shivam",
//     email:"sk@s.com",
//  });

//res.redirect("/test");

    // const cookies=req.cookies;
    // console.log(cookies);
    // res.cookie("name","sk");
    // res.cookie("age","32");
    // console.log(req.hostname);
    // console.log(req.ip);
    // console.log(req.get("accept"));
    // res.send("Example cookies route");
// });













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

