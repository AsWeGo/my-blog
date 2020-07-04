
/**
 * Created by LoneMouse on 20/7/2.
 */

/**
 * 获取时间间隔
 * @param startTime
 * @param endTime
 */
export function getTimeInterval(startDate, endDate = Date.now()) {
  if (arguments.length === 0) {
    return null
  }
  let startTime;
  let endTime;

  if (typeof startDate === 'object') {
    startTime = startDate.getTime();
    // 如果startTime是Date对象, 则获取Time字符串(1593702944150)
    // getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数。
  } else {
    startTime = startDate;
    // 如果是时间字符串, 直接赋值
  }
  if (typeof endDate === 'object') {
    endTime = endDate.getTime();
  } else {
    endTime = endDate;
  }

  let dateInterval =  endTime - startTime;
  // //计算出相差天数
  let days = Math.floor(dateInterval / (24 * 60 * 60 * 1000));
  // 下取整

  //计算小时数
  let hourLevel = dateInterval % (24 * 60 * 60 * 1000);
  let hours = Math.floor(hourLevel / (60 * 60 * 1000))
  //计算分钟数
  let minutesLevel = hourLevel % (60 * 60 * 1000);
  let minutes = Math.floor(minutesLevel / (60 * 1000));
  //计算秒数
  let seconds = Math.round((minutesLevel % (60 * 1000)) / 1000);
  // 四舍五入
  return `${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}
