
import axios from "axios";

async function sendRequest(otp: number) {
  let data = JSON.stringify({
    "email": "harkirat@gmail.com",
    "otp": otp,
    "newPassword": "123123123"
  });