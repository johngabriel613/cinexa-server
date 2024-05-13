import mongoose from "mongoose";
import env from '../utils/environment.js'

export const db = async() => {
  try {
    const conn = await mongoose.connect(env.dburi, {
      useNewURLParser : true,
      useUnifiedTopology : true
    })

    if(!conn) return console.error('Database Connection Failed')
    return console.log('Database Connected')

  } catch (error) {
    throw error
  }
}