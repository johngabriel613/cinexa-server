import { endpoints } from '../config/media.js';

const handleResponse = async(res, callback) => {
  try {
    const response = await callback();
    return res.json({
      success: true,
      response
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || 'Internal Server Error'
    });
  }
};

export const getMedia = async(req, res) => {
  const { params } = req.params;
  
  const collections = {
    'spotlight': 'spotlightAnimes',
    'trending': 'trendingAnimes',
    'latest-episodes': 'latestEpisodeAnimes',
    'top-upcoming': 'topUpcomingAnimes',
    'top10': 'top10Animes',
    'top-airing': 'topAiringAnimes',
    'genres': 'genres'
  };

  const collectionKey = collections[params];

  if(!collectionKey){
    return res.json({
      success: false,
      msg: 'Invalid Parameter'
    });
  }

  return handleResponse(res, async () => {
    const response = await endpoints.home();
    return response[collectionKey];
  });
};

export const getMediaInfo = (req, res) => {
  const { mediaId } = req.query;
  return handleResponse(res, () => endpoints.mediaInfo(mediaId));
};

export const getMediaEpisodes = (req, res) => {
  const { mediaId } = req.query;
  return handleResponse(res, () => endpoints.mediaEpisodes(mediaId));
};

export const getMediaEpisodeServers = (req, res) => {
  const { episodeId } = req.query;
  return handleResponse(res, () => endpoints.mediaEpisodeServers(episodeId));
}

export const getMediaEpisodeSRC = (req, res) => {
  const { episodeId } = req.query;
  return handleResponse(res, () => endpoints.mediaEpisodesSRC(episodeId));
};