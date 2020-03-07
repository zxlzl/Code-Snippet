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
const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = RandomColor();

/**
 * 生成星级评分
 * start => "★★★"
 */
const StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(3);

/**
 * 操作URL查询参数
 */
const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
params.has("young"); // true
params.get("sex"); // "male"

// Number

/**
 * 取整
 * num1 num2 num3 => 1 1 1
 */
const num1 = ~~1.69;
const num2 = 1.69 | 0;
const num3 = 1.69 >> 0;

/**
 * 补零
 * num => "00169"
 */
const FillZero = (num, len) => num.toString().padStart(len, "0");
const num = FillZero(169, 5);

/**
 * 转数值
 * 仅对只对null、""、false、数值字符串有效
 * num1 num2 num3 num4 => 0 0 0 169
 */
const num4 = +null;
const num5 = +"";
const num6 = +false;
const num7 = +"169";

/**
 * 时间戳
 * timestamp => 1550102400000
 */
const timestamp = +newDate("2019-02-14");

/**
 * 精确小数
 * 精确位数小于传入的数字
 * number => 1.7
 */
const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
const number = RoundNum(1.69, 1);

/**
 * 判断奇偶
 * number1 => even
 */
const OddEven = num => !!(num & 1) ? "odd" : "even";
const number1 = OddEven(2);

/**
 * 取最大最小值
 * min max => 0 2
 */
const arr = [0, 1, 2];
const min = Math.min(...arr);
const max = Math.max(...arr);

/**
 * 生成范围随机数
 */
const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const number2 = RandomNum(1, 10);

// Boolean

/**
 * 短路运算符
 */
let d
const a = d && 1; // 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
const b = d || 1; // 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
const c = !d; // 取假赋值：单个表达式转换为true则返回false，否则返回true

/**
 * 判断数据类型
 * 可判断类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap
 */
function DataType(tgt, type?) {
    const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
    return type ? dataType === type : dataType;
}
DataType("young"); // "string"
DataType(20190214); // "number"
DataType(true); // "boolean"
DataType([], "array"); // true
DataType({}, "array"); // false

/**
 * 是否为空数组
 * flag => true
 */
const arr1 = [];
const flag = Array.isArray(arr) && !arr.length;

/**
 * 是否为空对象
 * flag1 => true
 */
const obj = {};
const flag1 = DataType(obj, "object") && !Object.keys(obj).length;

/**
 * 满足条件时执行
 */
function Func() { }
const flagA = true; // 条件A
const flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行

/**
 * 为非假值时执行
 */
const flag2 = false; // undefined、null、""、0、false、NaN
!flag && Func();

/**
 * 数组不为空时执行
 */
const arr2 = [0, 1, 2];
arr.length && Func();

/**
 * 对象不为空时执行
 */
const obj1 = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();

/**
 * 函数退出代替条件分支退出
 */
if (flag) {
    Func();
    return false;
}
// 换成
if (flag) {
    return Func();
}

/**
 * switch/case使用区间
 */
const age = 26;
switch (true) {
    case isNaN(age):
        console.log("not a number");
        break;
    case (age < 18):
        console.log("under age");
        break;
    case (age >= 18):
        console.log("adult");
        break;
    default:
        console.log("please set your age");
        break;
}

// Array

/**
 * 克隆数组
 * arr => [0, 1, 2]
 */
const _arr = [0, 1, 2];
const arr3 = [..._arr];

/**
 * 合并数组
 * arr6 => [0, 1, 2, 3, 4, 5];
 */
const arr4 = [0, 1, 2];
const arr5 = [3, 4, 5];
const arr6 = [...arr1, ...arr2];

/**
 * 去重数组
 * arr7 => [0, 1, null]
 */
const arr7 = [...new Set([0, 1, 1, null, null])];

/**
 * 混淆数组
 * arr8 => [3, 4, 0, 5, 1, 2]
 */
const arr8 = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - .5);

/**
 * 清空数组
 * arr9 => []
 */
const arr9 = [0, 1, 2];
arr.length = 0;

/**
 * 截断数组
 * arr10 => [0, 1]
 */
const arr10 = [0, 1, 2];
arr10.length = 2;

/**
 * 交换赋值
 * a1 b1 => 1 0
 */
let a1 = 0;
let b1 = 1;
[a1, b1] = [b1, a1];

/**
 * 过滤空值
 * 空值：undefined、null、""、0、false、NaN
 * arr11 => [1, 2]
 */
const arr11 = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);

/**
 * 异步累计
 */
async function Todo(t){return t}
async function Fun(deps) {
    return deps.reduce(async (t, v) => {
        const dep = await t;
        const version = await Todo(v);
        dep[v] = version;
        return dep;
    }, Promise.resolve({}));
}
async function test(){
    const result = await Fun([1,2,3]); // 需在async包围下使用
}
test()

/**
 * 数组首部插入成员
 * arr12 => [0, 1, 2]
 */
let arr12 = [1, 2]; // 以下方法任选一种
arr12.unshift(0);
arr12 = [0].concat(arr);
arr12 = [0, ...arr];

/**
 * 数组尾部插入成员
 * arr13 => [0, 1, 2]
 */
let arr13 = [0, 1]; // 以下方法任选一种
arr13.push(2);
arr13.concat(2);
arr13[arr.length] = 2;
arr13 = [...arr, 2];

/**
 * 累计数组成员个数
 * count => { 0: 1, 1: 2, 2: 3 }
 */
const arr14 = [0, 1, 1, 2, 2, 2];
const count = arr14.reduce((t, v) => {
	t[v] = t[v] ? ++t[v] : 1;
	return t;
}, {});

/**
 * 解构数组成员嵌套
 * a b c d e f => 0 1 2 3 4 5
 */
const arr15 = [0, 1, [2, 3, [4, 5]]];
const [g, h, [i, j, [k, l]]] = arr15;

/**
 * 解构数组成员别名
 * m n o => 0 1 2
 */
const arr16 = [0, 1, 2];
let { 0: m, 1: n, 2: o } = arr16;

/**
 * 解构数组成员默认值
 * e f p q => 0 1 2 4
 */
const arr17 = [0, 1, 2];
let [e, f, p = 3, q = 4] = arr;

/**
 * 获取随机数组成员
 * randomItem => 1
 */
const arr18 = [0, 1, 2, 3, 4, 5];
const randomItem = arr18[Math.floor(Math.random() * arr18.length)];

/**
 * 创建指定长度数组
 * arr19 => [0, 1, 2]
 */
const arr19 = [...new Array(3).keys()];



// https://mp.weixin.qq.com/s/r8IXLh8ot7lJXGPtG38dqA


function type(target, type) {
    const whichtype = Object.prototype.toString.call(target).replace(/\[object (\w+)\]/, '$1').toLowerCase()
}