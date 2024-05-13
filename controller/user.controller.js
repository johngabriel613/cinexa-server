import { OTP } from "../model/otp.model.js";
import { User } from "../model/user.model.js";
import {otpGen} from "otp-gen-agent";

export const signup = async(req, res) => {
  try {
    const {username, email, password} = req.body

    const isUsernameTaken = await User.findOne({username: username});
    const isEmailTaken = await User.findOne({email: email});

    if(isUsernameTaken) return res.json({
      success: false,
      msg:"Username is already taken."
    })

    if(isEmailTaken) return res.json({
      success: false,
      msg:"Email is already taken."
    })

    const user = await new User({
      username: username,
      email: email,
      password: password
    }).save()

    if(!user) return res.json({
      success: false,
      msg: "Can't process it right now!"
    })

    const generatedOTP = await otpGen()

    const otp = await new OTP({
      email: user.email,
      otp: generatedOTP
    }).save()

    if(!otp) return res.json({
      success:false,
      msg: "Something went wrong"
    })

    return res.json({
      success: true,
      msg: "OTP sent to your email"
    })

  } catch (error) {
    throw error
  }
}

export const verify = async(req, res) => {
  try {
    const { email, otp } = req.body
  
    console.log(otp)

    const response = await OTP.findOne({email: email, otp:otp});

    if(!response) return res.json({
      success: false,
      msg: "Invalid OTP"
    })

    const user = await User.findOneAndUpdate({email: email}, {verified: true})

    if(!user) return res.json({
      success: false,
      msg: "Something went wrong!"
    })

    return res.json({
      success: true,
      msg: "Verified Successfully"
    })
   
  } catch (error) {
    throw error
  }
  
}