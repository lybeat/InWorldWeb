import http from './http'

const v1 = '/api/v1'

export function register(user) {
  return http.post('/register', user)
}

export function login(user) {
  return http.post('/login', user)
}

export function uploadUserInfo(userInfo) {
  return http.post('/user/info', userInfo)
}

export function getBanners() {
  return http.get('/banner')
}

export function getArticles(page) {
  return http.get(v1 + '/articles?page=' + page)
}

export function getArticleDetail(id) {
  return http.get(v1 + '/articles/' + id)
}