const bcrypt=require("bcryptjs");

const hashPassword=(passwprd)=>{
       return new Promise((resolve,reject)=>{
        bcrypt.genSalt(12,(error,salt)=>{
            if(error){
                return reject (error);
            }
            bcrypt.hash(passwprd,salt,(error,hash)=>{
                if(error){
                    return reject(error);
                }
                resolve(hash);
            });
        });
       });
};

module.exports=hashPassword;