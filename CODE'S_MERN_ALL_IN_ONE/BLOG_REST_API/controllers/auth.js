const{User}=require("../models");
const hashPassword=require("../utils/hashPassword");
const comparePassword=require("../utils/comparePassword");
const generateToken=require("../utils/genetrateToken");
const generatecode=require("../utils/generatecode");
const sendEmails =require("../utils/sendEmails");




const signup=async(req,res,next)=>{
try {
    // res.code=400;
    // throw new Error ("testError");
    const{name,email,password,role}=req.body;

    const isEmailExist=await User.findOne({email});
    if(isEmailExist){
        res.code=400;
        throw new Error("Email already exists");
    }

    const hashedPassword=await hashPassword(password);

    // if(!name){
    //     res.code=400;
    //     throw new Error("Name is required");
    // }

    // if(!email){
    //     res.code=400;
    //     throw new Error("Email is required");
    // }

    // if(!password){
    //     res.code=400;
    //     throw new Error("password is required");
    // }

    // if(password.lenth<6){
    //     res.code=400;
    //     throw new Error("password should be 6 character long required");
    // }
     


    const newUser=new User({name,email,password:hashedPassword,role})

    await newUser.save();

    res.status(201).json({code:201,status:true,message:"User registered successfully"});
    
} catch (error) {
    next(error)
}
};


const signin =async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});

        if(!user){
            res.code=401;
            throw new Error("Invalid Credentials")
        }
      const match =await comparePassword(password,user.password);
      if(!match){
        res.code=401;
        throw new Error("Invalid credentials");
      }
           const token=generateToken(user);

      res.status(200).json({code:200,status:true,message:"User signin done",data:{token}});

    } catch (error) {
        next(error)
    }
};


const verifyCode=async(req,res,next)=>{
    try {
        const {email}=req.body;
        const user =await User.findOne({email});
        if(!user){
            res.code=404;
            throw new Error ("User not Found");
        }
        if(user.isVerified){
            res.code=400;
            throw new Error("User is verified");
        }
  
        const code=generatecode(6);

        user.verificationCode=code;

        await user.save();
//send email
await sendEmails({
    emailtTo:user.email,
    subject:"Email verification code",
    code,
    content:"verify your account"

});

res.status(200).json({code:200,status:true,message:"User code sent done"});

    } catch (error) {
        next(error)
    }
}

module.exports={signup,signin,verifyCode};