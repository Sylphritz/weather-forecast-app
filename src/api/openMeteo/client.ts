import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default client
