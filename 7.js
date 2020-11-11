/**
 * 7、整数反转
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 链接：https://leetcode-cn.com/problems/reverse-integer/
 */

function reverse(x) {

    let xNum = Math.abs(x).toString().split('').reverse().join('');

    if (x < 0) {
        return xNum <= Math.pow(2, 31) ? -xNum : 0
    } else {
        return xNum < Math.pow(2, 31) ? xNum : 0
    }

}

console.log(reverse(1534236469))
