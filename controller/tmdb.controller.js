import { tmdbEndpoints } from "../config/tmdb.js"

export const getMediaList = async(req, res) => {
  const {mediaType, mediaCategory} = req.params

  const query = {
    page: req.query.page,
    language: req.query.language
  }

  try {
    const response = await tmdbEndpoints.mediaList(
      mediaType, mediaCategory
    )
    return res.status(200).json(response)
  } catch (error) {
    throw error
  }
}