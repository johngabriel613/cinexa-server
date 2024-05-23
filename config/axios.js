import Axios from 'axios';
import env from '../utils/environment.js';

export const tmdb = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers:{
    Authorization: `Bearer ${env.tmdb_bearer}`,
    "Content-Type": "application/json"
  }
})

tmdb.interceptors.response.use(
  response => {
    if(response && response.data) return response.data

    return response
  }, err => Promise.reject(err)
)