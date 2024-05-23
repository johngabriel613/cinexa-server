import { OTP } from "../model/otp.model.js";
import { User } from "../model/user.model.js";
import {customOtpGen} from "otp-gen-agent";
import { generateToken } from "../utils/jwt.js";

export const signin = async(req, res) => {
  try {
    const {email, password} = req.body

    const isEmailExist = await User.findOne({email: email, verified: true})

    if(!isEmailExist) return res.json({
      success: false,
      msg: 'This email is not registered yet.'
    })

    const user = await User.findOne({email: email, password: password})

    if(!user) return res.json({
      success: false,
      msg: 'Password is not correct.'
    })

    const {accessToken, refreshToken} = await generateToken(user._id, user.username, user.email)

    return res.json({
      success: true,
      msg: "Login Success",
      credentials: {
        email: user.email,
        username: user.username,
        accessToken: accessToken,
        refreshToken: refreshToken
      }
    })
    
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: 'Internal Server Error'
    })
  }
}

export const signup = async(req, res) => {
  try {
    const {username, email, password} = req.body

    const isUsernameTaken = await User.findOne({username: username, verified: true});
    const isEmailTaken = await User.findOne({email: email, verified: true});

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

    const generatedOTP = await customOtpGen({length: 6, chars: '1234567890'});

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

    await OTP.deleteOne({email: email, otp:otp})

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