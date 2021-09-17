import axios from 'axios';
import variaveis from './variaveis';

// const token = localStorage.getItem('token')

// const api = axio.create({
//   baseURL: process.env.REACT_APP_BACKEND,
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: token
//   }
// });

const api = axios.create({
  baseURL: variaveis.serverUrl
})


export default api;