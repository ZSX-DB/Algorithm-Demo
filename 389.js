// const findTheDifference = (s, t) => {
//     const map = new Map()
//     t.split('').forEach(item => {
//         map.set(item, (map.get(item) || 0) + 1)
//     })
//     s.split('').forEach(item => {
//         if (map.has(item)) map.set(item, map.get(item) - 1)
//     })
//     return [...map].find(item => item[1] === 1)[0]
// }


const findTheDifference = (s, t) => String.fromCharCode(t.split('').reduce((pre, cur) => pre + cur.charCodeAt(0), 0) - s.split('').reduce((pre, cur) => pre + cur.charCodeAt(0), 0))

console.log(findTheDifference('abcd', 'abcde'))
