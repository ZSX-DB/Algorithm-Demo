// const transpose = matrix => {
//     const n = matrix[0].length
//     const list = []
//
//     for (let i = 0; i < n; i++) {
//         list[i] = matrix.map(item => item[i])
//     }
//
//     return list
//
// }

const transpose = matrix => matrix[0].map((item, idx) => matrix.map(m => m[idx]))

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(transpose([[1, 2, 3], [4, 5, 6]]))
