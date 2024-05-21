import jwt from 'jsonwebtoken';

export const generateToken = async(id, username, email) => {
  try {
    const payload = {
      id,
      username,
      email
    }

    const accessToken =  jwt.sign(payload, '123', {expiresIn: "1h"})
    const refreshToken = jwt.sign(payload, '124', {expiresIn: "7d"})

    return {accessToken, refreshToken}
  } catch (error) {
    throw error
  }
}