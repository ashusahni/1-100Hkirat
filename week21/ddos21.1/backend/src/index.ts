import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

const otpStore: Record<string, string> = {};

// Normalize email function
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

// Generate OTP
app.post('/generate-otp', (req, res) => {
  const rawEmail = req.body.email;
  if (!rawEmail) return res.status(400).json({ message: "Email is required" });

  const email = normalizeEmail(rawEmail);
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  console.log(`OTP for ${email}: ${otp}`);
  res.status(200).json({ message: "OTP generated and logged" });
});

// Reset password
app.post('/reset-password', (req, res) => {
  const rawEmail = req.body.email;
  const rawOtp = req.body.otp;
  const newPassword = req.body.newPassword;

  if (!rawEmail || !rawOtp || !newPassword) {
    return res.status(400).json({ message: "Email, OTP, and new password are required" });
  }

  const email = normalizeEmail(rawEmail);
  const otp = String(rawOtp).trim();

  console.log(`Stored OTP: ${otpStore[email]}, Provided OTP: ${otp}`);

  if (otpStore[email] === otp) {
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email];
    res.status(200).json({ message: "Password has been reset successfully" });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
