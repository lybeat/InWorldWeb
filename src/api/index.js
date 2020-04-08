import http from './http'

const v1 = '/api/v1'

export function login(username, password) {
  return http.get('/login?username=' + username + "&password=" + password)
}

export function uploadUserInfo(userInfo) {
  return http.post('/user/info', userInfo)
}

export function getBannerList() {
  return http.get('/banner')
}

export function getArticleList() {
  return http.get(v1 + '/article/list')
}

export function getArticleDetail(id) {
  return http.get('/article?id=' + id)
}