import  express   from "express";
import axios from "axios";


const app = express()
app.use(express.json)

const otpStore: Record<string, string> = {};

//endpoint to generate otp 
app.get("generateOtp",(req,res)=>{
 const email = req.body.email
 if(!email){
  return res.status(400).json({msg:"email is required"})
 }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // generates a 6-digit OTP
  otpStore[email] = otp;
 console.log(`OTP for ${email}: ${otp}`)
 res.status(200).json({msg:"otp generated and logged"})

})



app.listen(3000,()=>{
  console.log("server been up runnig to port 3000")
})