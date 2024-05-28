import {media} from '../config/axios.js';

export const getPopular = async(req, res) => {
  try {
    const response = await media.get('/popular')

    if(!response) return res.status(200).json({
      success: false,
      msg: 'Something went wrong'
    })

    return res.status(200).json({
      success: true, 
      data: response
    })


  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || 'Internal Server Error'
    })
  }
}

export const getTopAiring = async(req, res) => {
  try {
    const response = await media.get('/top-airing')

    if(!response) return res.status(200).json({
      success: false,
      msg: 'Something went wrong'
    })

    return res.status(200).json({
      success: true, 
      data: {...response, results: response.results.slice(0,9)}
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || 'Internal Server Error'
    })
  }
}

export const getMovies = async(req, res) => {
  try {
    const response = await media.get('/movies')

    if(!response) return res.status(200).json({
      success: false,
      msg: 'Something went wrong'
    })

    return res.status(200).json({
      success: true, 
      data: response
    })


  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || 'Internal Server Error'
    })
  }
}

export const getRecentEpisodes = async(req, res) => {
  try {
    const response = await media.get('/recent-episodes')

    if(!response) return res.status(200).json({
      success: false,
      msg: 'Something went wrong'
    })

    return res.status(200).json({
      success: true, 
      data: response
    })


  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || 'Internal Server Error'
    })
  }
}