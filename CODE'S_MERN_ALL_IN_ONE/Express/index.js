console.log("Welcome to express.js");

const express=require("express");
const mongoose=require("mongoose");



const app=express();
app.use(express.json());


 const connectionUrl= ("mongodb://127.0.0.1:27017/schoolDb");
mongoose
.connect(connectionUrl)
.then(()=>console.log("DATABESE OKKK"))
.catch((error)=> console.log(error));

 const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    dep:String
 });

 const Student=mongoose.model("student",studentSchema);

 //add student
 app.post("/student/single",async(req,res,next)=>{
    try {
        const{name,email,age,dep}=req.body;
        const newStudent=new Student({
            name:name,
            email:email,
            age:age,
            dep:dep
        });
        await newStudent.save();
        res.status(200).json({message:"Student added okk"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }

 });




 app.post("/student/multiple",async(req,res,next)=>{
    
 });



const errorMiddleware=(error,req,res,next)=>{
    res.status(500).send(error.message);
};

app.use(errorMiddleware);



app.listen(8000,()=>{
    console.log("server is runningon port 8000");
});







