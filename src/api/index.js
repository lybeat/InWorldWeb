import http from './http'

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
  return http.get('/article')
}

export function getArticleDetail(id) {
  return http.get('/article?id=' + id)
}