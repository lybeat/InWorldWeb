import axios from 'axios'

const service = axios.create({
  withCredentials: false,
  baseURL: 'http://127.0.0.1:8000',
  timeout: 15000 // 请求超时时间
})

service.interceptors.request.use(config => {
  //config.headers['Accept'] = 'application/json'
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      switch (response.data.code) {
        case 401: // 用户未登录
          break;
        default:
          console.log(response.data.msg);
          break;
      }
      return Promise.reject(response)
    } else {
      return response.data
    }


  },
  error => {
    if (error.response) {
      const res = error.response.data

      return Promise.reject(res)
    } else {
      return Promise.reject(error)
    }
  }
)

export default service

const gotoLoginPage = () => {
  router.replace({
    path: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}