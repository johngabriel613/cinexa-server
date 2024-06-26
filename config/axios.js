import Axios from 'axios';
import env from '../utils/environment.js';

export const media = Axios.create({
  baseURL: "https://animax-lilac.vercel.app/anime",
  headers:{
    "Content-Type": "application/json"
  }
})

media.interceptors.response.use(
  response => {
    if(response && response.data) return response.data

    return response
  }, err => Promise.reject(err)
)