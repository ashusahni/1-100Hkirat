"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json);
const otpStore = {};
//endpoint to generate otp 
app.post("generate-otp", (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ msg: "email is required" });
    }
    const otp = Math.floor(100000 + Math.random() * 90000).toString(); // generates a 6-digit OTP
    otpStore[email] = otp;
    console.log(`OTP for ${email}: ${otp}`);
    res.status(200).json({ msg: "otp generated and logged" });
});
//endpoint to reset password
app.post("/reset-password", (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
        return res.status(400).json({ msg: "otp,email_,password" });
    }
    if (otpStore[email] === otp) {
        console.log(`Password for ${email} has been reset to: ${newPassword}`);
        delete otpStore[email];
        res.status(200).json({ msg: "password has been reset successfully" });
    }
    else {
        res.status(400).json({ msg: "invalid otp" });
    }
});
app.listen(3000, () => {
    console.log("server been up runnig to port 3000");
});
