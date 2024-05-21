import { Router } from "express";
import { signin, signup, verify } from "../controller/user.controller.js";

export const router = Router();

router.get('/test', async(req, res) => {
  console.log("hello")
  return res.json("hello")
})


router.post('/signin', signin)
router.post('/signup', signup)
router.post('/verify', verify)

router.get('/:mediaType/:mediaCategory')