import nodemailer from 'nodemailer';
import env from './environment.js'
import path from 'path'
import hbs from 'nodemailer-express-handlebars';


export const sendMail = async(email, otp) => {

  const transporter = nodemailer.createTransport({
    host: env.host,
    service: env.service,
    port: env.mail_port,
    secure: env.secure,
    auth:{
      user: env.email,
      pass: env.pass
    },
  })
  
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./templates/'),
      defaultLayout: false
    },
    viewPath: path.resolve('./templates/')
  }
  
  
  const mailOptions = {
    from: `"CINEXA" <${env.email}>`,
    to: email,
    subject: "OTP VERIFICATION",
    template: "verify",
    context: {
      otp : otp
    },
  }

  try {
    await transporter.use('compile', hbs(handlebarOptions))
    await transporter.sendMail(mailOptions)
  } catch (error) {
    throw error
  }
} 