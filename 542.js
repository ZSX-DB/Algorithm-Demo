// const updateMatrix = mat => {
//     const rowLen = mat.length
//     const colLen = mat[0].length
//     const createDP = () => {
//         const dp = []
//         for (let i = 0; i < rowLen; i++) {
//             dp[i] = mat[i].map(_ => _ ? Infinity : 0)
//         }
//         return dp
//     }
//     const dp = createDP()
//     const handle = (ri, ci) => (dp[ri] === undefined || dp[ri][ci] === undefined) ? Infinity : dp[ri][ci] + 1
//     const traverse = () => {
//         for (let i = 0; i < rowLen; i++) {
//             for (let j = 0; j < colLen; j++) {
//                 if (dp[i][j] === 0) continue
//                 const left = handle(i, j - 1)
//                 const right = handle(i, j + 1)
//                 const top = handle(i - 1, j)
//                 const bottom = handle(i + 1, j)
//                 dp[i][j] = Math.min(left, right, top, bottom, dp[i][j])
//             }
//         }
//     }
//     let lastStr = ''
//     while (true) {
//         traverse()
//         const curStr = JSON.stringify(dp)
//         if (lastStr === curStr) break
//         lastStr = curStr
//     }
//     return dp
// }

// 由于没法同时确认上下左右的最终值，一次遍历只能确认 2 个值，优先左上到右下，然后右下到左上
const updateMatrix = mat => {
    const rowLen = mat.length
    const colLen = mat[0].length
    const dp = Array(rowLen).fill(null).map((_, rowIdx) => Array(colLen).fill(null).map((_, colIdx) => mat[rowIdx][colIdx] ? Infinity : 0))
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (i > 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1)
            if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1)
        }
    }
    for (let i = rowLen - 1; i >= 0; i--) {
        for (let j = colLen - 1; j >= 0; j--) {
            if (i < rowLen - 1) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1)
            if (j < colLen - 1) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1)
        }
    }
    return dp
}

const mat1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
const mat2 = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
const mat3 = [
    [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 1]]
console.log(updateMatrix(mat1))
console.log(updateMatrix(mat2))
console.log(updateMatrix(mat3))
