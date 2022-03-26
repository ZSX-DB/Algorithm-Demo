// const maxCount = (m: number, n: number, ops: [number, number][]): number => {
//     const list: number[][] = Array(m).fill(null).map(_ => Array(n).fill(0))
//     for (const [x, y] of ops) {
//         for (let i = 0; i < x; i++) {
//             for (let j = 0; j < y; j++) {
//                 list[i][j]++
//             }
//         }
//     }
//     const flatList = list.flat(1)
//     const maxNum = Math.max(...flatList)
//     return flatList.filter(item => item === maxNum).length
// }


// const maxCount = (m: number, n: number, ops: [number, number][]): number => {
//     if (ops.length) {
//         const xs = ops.map(op => op[0])
//         const ys = ops.map(op => op[1])
//         return Math.min(...xs) * Math.min(...ys)
//     } else {
//         return m * n
//     }
// }

const maxCount = (m: number, n: number, ops: [number, number][]): number => ops.length ? Math.min(...ops.map(op => op[0])) * Math.min(...ops.map(op => op[1])) : m * n

console.log(maxCount(3, 3, [[2, 2], [3, 3]]))
console.log(maxCount(3, 3, []))
