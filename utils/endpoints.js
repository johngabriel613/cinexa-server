import { media } from "../config/axios"

export const endpoints = {
  mediaInfo: (mediaId) => {return media.get(`/info?id=${mediaId}`)},
  mediaEpisodes: (query) => {return media.get(`/episodes/${params}`)}
}