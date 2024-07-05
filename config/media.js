import { media } from "./axios.js";

export const endpoints = {
  home: () => {
    return media.get('/home')
  },
  mediaInfo: ( params ) => {
    return media.get("/info", {params})
  },
  mediaEpisodes: ( mediaId, params ) => {
    return media.get(`/episodes/${mediaId}`, {params})
  },
  mediaEpisodeServers: ( params ) => {
    return media.get("/servers", {params})
  },
  mediaEpisodesSRC: ( params ) => {
    return media.get("/episode-srcs", {params});
  },
  mediaSearch: (params) => {
    return media.get("/search", {params})
  },
  mediaSearchSuggestions: (params) => {
    return media.get("/search/suggest", {params})
  }
}