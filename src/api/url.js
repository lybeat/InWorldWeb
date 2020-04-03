
const host = ''
if (process.env.NODE_ENV == 'development') {
  host = 'http://127.0.0.1:3060'
} else if (process.env.NODE_ENV == 'debug') {
  host = 'http://127.0.0.1:3060'
} else if (process.env.NODE_ENV == 'production') {
  host = 'http://127.0.0.1:3060'
}

export const article = host + '/article'