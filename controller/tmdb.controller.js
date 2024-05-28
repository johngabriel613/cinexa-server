// import { tmdbEndpoints } from "../config/tmdb.js"

// export const getMediaList = async(req, res) => {
//   try {
//     const {mediaType, mediaCategory} = req.params

//     const query = {
//       page: req.query.page,
//       language: req.query.language
//     }
  
//     const response = await tmdbEndpoints.mediaList(
//       mediaType, mediaCategory, query
//     )

//     if(!response) return res.json("Server can't reach")

//     return res.status(200).json(response)
//   } catch (error) {
//     throw error
//   }
// }

// export const getMediaDetails = async(req, res) => {
//   try {
//     const {mediaType, mediaId} = req.params

//     const query = {
//       language: req.query.language
//     }
  
//     const response = await tmdbEndpoints.mediaDetail(
//       mediaType, mediaId, query
//     )
    
//     return res.status(200).json(response)
//   } catch (error) {
//     throw error
//   }
// }