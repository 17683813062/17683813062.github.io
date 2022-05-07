
export const getToday = () => { // 获取当前时间
  var toDay = new Date()
  var year = toDay.getFullYear() //年
  var month = toDay.getMonth() + 1 < 10 ? '0' + (toDay.getMonth() + 1) : toDay.getMonth() + 1 //月
  var data = toDay.getDate() < 10 ? '0' + toDay.getDate() : toDay.getDate() //日
  var hour = toDay.getHours() < 10 ? '0' + toDay.getHours() : toDay.getHours() //时
  var minute = toDay.getMinutes() < 10 ? '0' + toDay.getMinutes() : toDay.getMinutes() //分
  var second = toDay.getSeconds() < 10 ? '0' + toDay.getSeconds() : toDay.getSeconds() //秒
  var today = year + '-' + month + '-' + data + ' ' + hour + ':' + minute + ':' + second
  return today;
}

export const getTimeStamp = () =>{ // JS获取当前毫秒时间戳的方法
  return new Date().getTime();  
}