const nodemailer=require("nodemailer");


const sendEmails=async({emailtTo,subject,code,content})=>{
      const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"abc.12@gmail.com",
            pass:"sklfnslkngker"
        }
      });
      const message={
        to:emailtTo,
        subject,
        html:`
        <div>
        <h3>Use this below code${content}</h3>
        <p><strong>Code:</strong>${code}</p>
        </div>
        `,
      };
      await transporter.sendMail(message);
}
module.exports=sendEmails;