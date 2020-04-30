export const getScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}