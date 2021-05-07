// 统计出现次数重组字符串
// const customSortString = (S, T) => {
//     const record = new Map()
//     S.split('').forEach(ch => {
//         record.set(ch, 0)
//     })
//     return T
//         .split('')
//         .map(ch => {
//             if (record.has(ch)) {
//                 record.set(ch, record.get(ch) + 1)
//                 return ''
//             }
//             return ch
//         })
//         .filter(item => item !== '')
//         .concat(...[...record].map(item => new Array(item[1]).fill(item[0])))
//         .join('')
// }

// sort 定义排序规则
const customSortString = (S, T) => T.split('').sort((a, b) => S.indexOf(a) - S.indexOf(b)).join('')

console.log(customSortString('cba', 'abcd'))
