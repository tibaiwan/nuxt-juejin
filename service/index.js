import axios from 'axios'
import qs from 'qs'
import config from './config'

if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

const service = axios.create(config)

service.interceptors.response.use(
  res => res.data,
  error => Promise.reject(error)
)

export default {
  post (url, data) {
    return service({
      method: 'post',
      url,
      params: data
    })
  },
  get (url, data) {
    return service({
      method: 'get',
      url,
      params: data
    })
  }
}
