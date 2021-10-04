/**
 * 12、整数转罗马数字
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 * 链接：https://leetcode-cn.com/problems/integer-to-roman/
 */

// 贪心算法
// const intToRoman = num => {
//     const list = [
//         {
//             label: 'M',
//             value: 1000
//         },
//         {
//             label: 'CM',
//             value: 900
//         },
//         {
//             label: 'D',
//             value: 500
//         },
//         {
//             label: 'CD',
//             value: 400
//         },
//         {
//             label: 'C',
//             value: 100
//         },
//         {
//             label: 'XC',
//             value: 90
//         },
//         {
//             label: 'L',
//             value: 50
//         },
//         {
//             label: 'XL',
//             value: 40
//         },
//         {
//             label: 'X',
//             value: 10
//         },
//         {
//             label: 'IX',
//             value: 9
//         },
//         {
//             label: 'V',
//             value: 5
//         },
//         {
//             label: 'IV',
//             value: 4
//         },
//         {
//             label: 'I',
//             value: 1
//         }
//     ]
//
//     let str = ''
//     for (let i = 0; i < list.length; i++) {
//         if (i === 0 && num >= 1000 || num >= list[i].value && num < list[i - 1].value) {
//             let count = (num - num % list[i].value) / list[i].value
//             num -= count * list[i].value
//             while (count > 0) {
//                 str += list[i].label
//                 count--
//             }
//         }
//     }
//     return str
// }

// 优化版贪心算法
const intToRoman = num => {
    let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let str = ''
    for (let i = 0; i < 13; i++) {
        while (num >= keys[i]) {
            num -= keys[i]
            str += values[i]
        }
    }
    return str
}

console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1000))
console.log(intToRoman(985))
console.log(intToRoman(1994))
console.log(intToRoman(4957))
