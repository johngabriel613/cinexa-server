import { Router } from "express";
import { signin, signup, verify } from "../controller/user.controller.js";
import { getMedia, getMediaEpisodes, getMediaInfo, getMediaEpisodeSRC, getMediaEpisodeServers } from "../controller/media.controller.js";

export const router = Router();

router.get('/test', async(req, res) => {
  console.log("hello")
  return res.json("hello")
})

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/verify', verify)

router.get('/anime/info', getMediaInfo)
router.get('/anime/episodes', getMediaEpisodes)
router.get('/anime/servers', getMediaEpisodeServers)
router.get('/anime/episode-src', getMediaEpisodeSRC)
router.get('/anime/:params', getMedia)
