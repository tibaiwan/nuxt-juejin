import http from 'http'
import https from 'https'

export default {
  headers: {
    post: {
      'Content-type': 'application-x-www-form-urlencoded;charset=UTF-8'
    },
    'X-Request-With': 'XMLHttpRequest'
  },
  timeout: 10000,
  withCredentials: true,
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
}
