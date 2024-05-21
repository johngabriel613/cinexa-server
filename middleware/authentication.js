import jwt from "jsonwebtoken";

export const isAuthenticated = async(req, res, next) => {
  try {
    const {accessToken} = req.headers.authorization

    if(!accessToken) return res.json({
      success: false,
      msg: "No access token provided"
    })

    const decoded = jwt.verify(accessToken, 123)

    if(!decoded) return res.json({
      success: false,
      msg: "Unauthorized access"
    })

    next();
  } catch (error) {
    next(error)
  }
}