import { media } from "./axios.js";

export const endpoints = {
  home: () => {
    return media.get('/home')
  },
  mediaInfo: (mediaId, query) => {
    return media.get(`/info?id=${mediaId}`, query)
  },
  mediaEpisodes: (mediaId, query) => {
    return media.get(`/episodes/${mediaId}`, query)
  },
  mediaEpisodeServers: (episodeId, query) => {
    return media.get(`/servers?episodeId=${episodeId}`, query)
  },
  mediaEpisodesSRC: (episodeId, query) => {
    return media.get(`/episode-srcs?id=${episodeId}`, query)
  },
}