/**
 * 7、整数反转
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 链接：https://leetcode-cn.com/problems/reverse-integer/
 */

// const reverse = x => {
//     let res = 0
//     let num = Math.abs(x)
//     while (num) {
//         const remainder = num % 10
//         res = res * 10 + remainder
//         num = (num - remainder) / 10
//     }
//     return res > 2 ** 31 ? 0 : (x > 0 ? res : -res)
// }

const reverse = x => {
    if (x > 0) {
        const y = Number(String(x).split('').reverse().join(''))
        return y > 2 ** 31 - 1 ? 0 : y
    } else {
        const y = Number(String(-x).split('').reverse().join(''))
        return -y < -(2 ** 31) ? 0 : -y
    }
}


console.log(reverse(-123))
console.log(reverse(1534236469))
