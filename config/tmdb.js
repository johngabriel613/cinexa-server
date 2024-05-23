import { tmdb } from "./axios.js";

export const tmdbEndpoints = {
  mediaList : (mediaType, mediaCategory, query) => {
    return tmdb.get(`${mediaType}/${mediaCategory}`, query)
  },
  mediaDetail : (mediaType, mediaId, query) => {
    return tmdb.get(`${mediaType}/${mediaId}`, query)
  },
  mediaLogo : (mediaType, mediaId, query) => {
    return tmdb.get(`${mediaType}/${mediaId}/images`, query)
  },
  mediaRecommendation : (mediaType, mediaId, query) => {
    return tmdb.get(`${mediaType}/${mediaId}/recommendations`, query)
  },
  mediaCredit : (mediaType, mediaId, query) => {
    return tmdb.get(`${mediaType}/${mediaId}/credits`, query)
  }
}