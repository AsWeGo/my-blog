
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
