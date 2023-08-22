import axios from 'axios'

const coreApi = axios.create({
  baseURL: "https://conexos-api.vercel.app/",
  headers: {
    "Content-Type": "application/json"
  }
})

export default coreApi