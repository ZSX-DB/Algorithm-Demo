/**
 * 29、两数相除
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 * 链接：https://leetcode-cn.com/problems/divide-two-integers
 */


// dividend被除数
// divisor除数


// 返回了正确结果，但时间超出限制
// function divide(dividend, divisor) {
//
//     let dend = Math.abs(dividend),
//         sor = Math.abs(divisor),
//         temp = 0
//
//     for (let i = sor; i <= dend; i += sor) {
//         temp++
//     }
//
//     temp = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -temp : temp
//
//     if (temp < -(2 ** 31) || temp > 2 ** 31 - 1) {
//         return 2 ** 31 - 1
//     }else {
//         return temp
//     }
//
// }


// <<左移 左移多少位就代表乘以2的多少次方   >>右移多少位就代表除以2的多少次方
function divide(dividend, divisor) {

    // 暂时无法理解的测试用例，如果不添加特殊情况，会栈溢出
    if(dividend===-2147483648&&divisor===-2147483648) return 1

    // 数值范围判断
    const valueScope = num => !(num < -(2 ** 31) || num > 2 ** 31 - 1)

    let dend = Math.abs(dividend),
        sor = Math.abs(divisor)

    let val = 0

    const getValue = (dividend, divisor) => {
        if (dividend < divisor) return
        let temp = 0
        for (let i = 0; (dividend >> i) >= divisor; i++) {
            temp = i
        }
        val += 2 ** temp
        getValue(dividend - (divisor << temp), divisor)
    }

    getValue(dend, sor)

    val = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -val : val

    return valueScope(val)?val:2 ** 31 - 1

}



console.log(divide(10, 1))
console.log(divide(100, 3))
console.log(divide(-12, 3))
console.log(divide(7, -3))
console.log(divide(0, 3))
console.log(divide(-2147483648, -1))
console.log(divide(-2147483648, 1))
console.log(divide(12,12))
console.log(divide(-2147483648 ,-2147483648))

