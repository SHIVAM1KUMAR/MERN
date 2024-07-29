const express=require("express");
const bodyParser=require("body-parser");
const dotenv=require('dotenv');
const morgan= require("morgan");
dotenv.config();
const connectMongodb=require("./init/mongodb");
const {authRoute}=require("./routes")
const {errorHandler}=require("./middleware");
const notfound=require("./controllers/notfound");



//init app
const app=express();

//Connect database
connectMongodb();


//third party middleware
app.use(express.json({limit:"500mb"}));
app.use(bodyParser.urlencoded({limit:"500mb",extended:true}));
app.use(morgan("dev"));

//Route section

app.use("/api/v1/auth",authRoute);


//not founf route
app.use("*",notfound);

//error handler
app.use(errorHandler);









module.exports=app;