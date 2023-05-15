import axios from 'axios';

export default axios.create({
  baseURL: 'https://clarkeapi.onrender.com',
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json'
  }
})