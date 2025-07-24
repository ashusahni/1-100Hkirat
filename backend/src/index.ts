import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
app.use(express.json()); // ✅ Fix: Added parentheses

const otpStore: Record<string, string> = {};

// Generate OTP
app.post("/generate-otp", (req: Request, res: Response) => {
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ msg: "email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  otpStore[email] = otp;
  console.log(`OTP for ${email}: ${otp}`);
  res.status(200).json({ msg: "otp generated and logged" });
});

// Reset password
app.post("/reset-password", (req: Request, res: Response) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ msg: "email, otp, and newPassword are required" });
  }

  if (otpStore[email] === otp) {
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email];
    res.status(200).json({ msg: "password has been reset successfully" });
  } else {
    res.status(400).json({ msg: "invalid otp" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
