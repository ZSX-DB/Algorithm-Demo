/**
 * 数组扁平化
 */
const arr = [1, 2, 3, [11, 12], [false, true], [21, 22, [31, 32, [41, 42]]], ['first', 'second', ['third']]]

// 使用toString(但必须数组不能有字符串，不推荐使用)
// const flat = arr => JSON.parse(`[${arr.toString()}]`)


// es6的flat，但需要获取最多的层数
// const flat = arr => {
//     let max = 0
//     arr.forEach(item => {
//         const str = JSON.stringify(item)
//         let count = 0
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === '[') count++
//         }
//         max = Math.max(max, count)
//     })
//     return arr.flat(3)
// }

// 或使用Infinity
const flat = arr => arr.flat(Infinity)

// 迭代方式
// const flat = arr => {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr)
//     }
//     return arr
// }

// 递归
// const flat = arr => {
//     const list = []
//     arr.forEach(item => {
//         Array.isArray(item) ? list.push(...flat(item)) : list.push(item)
//     })
//     return list
// }

// 正则替换 [ 和 ]
// const flat = arr => JSON.parse(`[${JSON.stringify(arr).replace(/[\[\]]/g, '')}]`)

console.log(flat(arr))


