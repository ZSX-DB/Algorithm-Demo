// 使用辅助数组
// const rotate = matrix => {
//     const res = []
//     let idx = 0
//     while (idx < matrix.length) {
//         res[idx] = matrix.map(item => item[idx]).reverse()
//         idx++
//     }
//     const len = matrix.length
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             matrix[i][j] = res[i][j]
//         }
//     }
// }

// 水平轴翻转再主对角线翻转
const rotate = matrix => {
    const n = matrix.length
    for (let i = 0; i < Math.floor(n / 2); i++) {
        [matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]]
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix
}

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))
