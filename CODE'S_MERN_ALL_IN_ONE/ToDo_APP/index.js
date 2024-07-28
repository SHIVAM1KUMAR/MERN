const express =require("express");
const mongoose=require("mongoose");
const path =require("path");
const bodyParser=require("body-parser");

const PORT=8000;



//app init
const app=express();

const connectionUrl=("mongodb://127.0.0.1:27017/todoDb");
mongoose
.connect(connectionUrl)
.then(()=>console.log("DAatbase okk"))
.catch((error)=> console.log(error.message));

 const todoSchema= mongoose.Schema(
  {
    title:{type:String,required:true},
    description: {
        type: String,
        required: true // Optional: set to false if description is not mandatory
      }
   },
{timeStamp:true}
);

const Todo=mongoose.model("todo",todoSchema);



//view engine
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));


app.get("/",(req,res,next)=>{
    try {
        res.render("index",{title:"List todo "});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

app.get("/add-todo",(req,res,next)=>{
    try {
        res.render("newTodo",{title:"newTodo"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

app.get("/update-todo",(req,res,next)=>{
    try {
        res.render("updatetodo",{title:"Update todo"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});


app.get("/delete-todo",(req,res,next)=>{
    try {
        res.render("deletetodo",{titlt:"Delete todo"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});



app.post("/add-todo",async(req,res,next)=>{
try {
  const {title,description}=req.body;
  
//   if (Array.isArray(title)) {
//     title = title.join(', '); // or handle it as needed
// }
   const newTodo = new Todo ({
    title,
    description
});
  
    await newTodo.save();
    res.redirect("/");
} catch (error) {
    res.status(500).json({message:error.message});
   

}
});


//listen server
app.listen(PORT,()=>{
    console.log("Server is listening on port 8000 ");
});