const mongoose=require("mongoose");
const{connectiomUrl}=require("../config/keys");

const connectMongodb= async() => {
    try {
        await mongoose.connect(connectiomUrl);
        console.log("DATABASE OKK");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectMongodb;