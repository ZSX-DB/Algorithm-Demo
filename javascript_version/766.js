// 全量比较
const isToeplitzMatrix = matrix => {
    const m = matrix.length
    const n = matrix[0].length
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][[j]] !== matrix[i - 1][j - 1]) return false
        }
    }
    return true
}

// 判断前行中除最后一个元素外剩余的元素完全等于后行中除第一个元素外剩余的元素
// const isToeplitzMatrix = matrix => {
//     const m = matrix.length
//     const n = matrix[0].length
//     for (let i = 0; i < m - 1; i++) {
//         if (JSON.stringify(matrix[i].slice(0, n - 1)) !== JSON.stringify(matrix[i + 1].slice(1, n))) return false
//     }
//     return true
// }

console.log(isToeplitzMatrix([[36, 86, 7, 94, 71, 59, 10], [19, 0, 86, 7, 94, 71, 59]]))
console.log(isToeplitzMatrix([[1, 0], [0, 0]]))
console.log(isToeplitzMatrix([[1]]))
console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]))
console.log(isToeplitzMatrix([[1, 2], [2, 2]]))
