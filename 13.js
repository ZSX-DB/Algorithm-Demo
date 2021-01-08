/**
 * 13、罗马数字转整数
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * 链接：https://leetcode-cn.com/problems/roman-to-integer/
 */


// 记录相减位
// const romanToInt = s => {
//     const map = new Map([
//         ['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000],
//         ['IV', 4], ['IX', 9], ['XL', 40], ['XC', 90], ['CD', 400], ['CM', 900]
//     ])
//     let result = 0
//     for (let i = 0; i < s.length; i++) {
//         if (map.get(`${s[i]}${s[i + 1]}`)) {
//             result+=map.get(`${s[i]}${s[i + 1]}`)
//             i++
//         }else {
//             result+=map.get(s[i])
//         }
//     }
//     return result
// }

// 不记录相减位
// const romanToInt = s => {
//     const map = new Map([
//         ['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]
//     ])
//     let result = 0
//     const len = s.length
//     for (let i = 0; i < len-1; i++) {
//         if(map.get(s[i])>=map.get(s[i+1])){
//             result+=map.get(s[i])
//         }else {
//             result-=map.get(s[i])
//         }
//     }
//     result += map.get(s[len-1])
//     return result
// }

// 优化(减少map获取次数)
const romanToInt = s => {
    const map = new Map([
        ['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]
    ])
    const len = s.length
    let result = 0
    let current = map.get(s[0])
    for (let i = 0; i < len - 1; i++) {
        const next = map.get(s[i + 1])
        current >= next ? result += current : result -= current
        current = next
    }
    result += map.get(s[len - 1])
    return result
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('XLIX'))
console.log(romanToInt('CMXCIX'))
