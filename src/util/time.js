var moment = require('moment')

export const formatTimestamp = function (timestamp) {
  let ts = timestamp * 1000
  
  let minutes = moment().diff(moment(ts), "minutes")

  if (minutes < 60) {
    return moment(ts).locale('zh-cn').startOf('minutes').fromNow()
  }
  
  let day = moment().diff(moment(ts), 'day')

  if (day < 7) {
    return moment(ts).locale('zh-cn').startOf('hour').fromNow()
  }

  return moment(ts).format('YYYY/MM/DD HH:mm:ss')
}