import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import url from './url'

axios.defaults.baseURL = url.host

axios.defaults.timeout = 30000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(
  config => {
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401: // 未登录
          gotoLoginPage()
          break
        case 403: // token 过期
          localStorage.removeItem('token')
          store.commit('loginSuccess', null)
          setTimeout(() => {
            gotoLoginPage()
          }, 1000)
          break
        case 404: // 请求不存在
          break
        default:
          break
      }
      return Promise.reject(error.response)
    }
  }
)

const gotoLoginPage = () => {
  router.replace({
    path: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}