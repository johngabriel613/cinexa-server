import mongoose from "mongoose";
import { sendMail } from "../utils/nodemailer.js";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  otp:{
    type: Number,
    required: true
  },
  createdAt:{
    type:Date,
    default:Date.now,
    expires: 60 * 5
  }
})

otpSchema.pre("save", async function(next) {
  if(this.isNew){
    await sendMail(this.email, this.otp)
  }
  next();
})

export const OTP = mongoose.model("OTP", otpSchema);