// String

/**
 * 对比时间
 * 时间个位数形式需补0
 * overtime => false
 */
const time1 = "2019-02-14 21:00:00";
const time2 = "2019-05-01 09:00:00";
const overtime = time1 > time2;

/**
 * 格式化金钱
 * money => "20,190,214"
 */
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214);

/**
 * 生成随机ID
 */
const RandomId = len => Math.random().toString(36).substring(3, len);
const id = RandomId(10);

/**
 * 生成随机HEX色值
 * color => "#f03665"
 */
const RandomColor = () =>"#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = RandomColor();

// https://mp.weixin.qq.com/s/r8IXLh8ot7lJXGPtG38dqA