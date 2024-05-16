import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://food-explorer-api-1d21.onrender.com',
  withCredentials: true,
})
