// 迭代超时
// const minPathSum = grid => {
//     let min = Infinity
//     const rowMax = grid.length - 1
//     const colMax = grid[0].length - 1
//     const helper = (val, row, col) => {
//         if (row < rowMax && col < colMax) {
//             helper(val + grid[row][col], row + 1, col)
//             helper(val + grid[row][col], row, col + 1)
//         } else if (row === rowMax && col < colMax) {
//             helper(val + grid[row][col], row, col + 1)
//         } else if (row < rowMax && col === colMax) {
//             helper(val + grid[row][col], row + 1, col)
//         } else if (row === rowMax && col === colMax) {
//             min = Math.min(min, val + grid[row][col])
//         }
//     }
//     helper(0, 0, 0)
//     return min
// }

// 动态规划
// const minPathSum = grid => {
//     const rowLen = grid.length
//     const colLen = grid[0].length
//     const createRows = () => {
//         let sum = 0
//         const list = []
//         for (let i = 0; i < colLen; i++) {
//             sum += grid[0][i]
//             list.push(sum)
//         }
//         return list
//     }
//     const createCols = () => {
//         let sum = 0
//         const list = []
//         for (let i = 0; i < rowLen; i++) {
//             sum += grid[i][0]
//             list.push(sum)
//         }
//         return list
//     }
//     const rows = createRows()
//     const cols = createCols()
//     const dp = grid.map((row, idx) => idx === 0 ? rows : row.map((_, i) => i === 0 ? cols[idx] : 0))
//     for (let i = 1; i < rowLen; i++) {
//         for (let j = 1; j < colLen; j++) {
//             dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
//         }
//     }
//     return dp[rowLen - 1][colLen - 1]
// }

// 优化写法
const minPathSum = grid => {
    const rows = [grid[0][0]]
    const cols = [grid[0][0]]
    for (let i = 1; i < grid[0].length; i++) {
        rows.push(rows[i - 1] + grid[0][i])
    }
    for (let i = 1; i < grid.length; i++) {
        cols.push(cols[i - 1] + grid[i][0])
    }
    const dp = grid.map((row, idx) => idx === 0 ? rows : row.map((_, i) => i === 0 ? cols[idx] : 0))
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
}

console.log(minPathSum([[1]]))
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))
console.log(minPathSum([
    [7, 1, 3, 5, 8, 9, 9, 2, 1, 9, 0, 8, 3, 1, 6, 6, 9, 5],
    [9, 5, 9, 4, 0, 4, 8, 8, 9, 5, 7, 3, 6, 6, 6, 9, 1, 6],
    [8, 2, 9, 1, 3, 1, 9, 7, 2, 5, 3, 1, 2, 4, 8, 2, 8, 8],
    [6, 7, 9, 8, 4, 8, 3, 0, 4, 0, 9, 6, 6, 0, 0, 5, 1, 4],
    [7, 1, 3, 1, 8, 8, 3, 1, 2, 1, 5, 0, 2, 1, 9, 1, 1, 4],
    [9, 5, 4, 3, 5, 6, 1, 3, 6, 4, 9, 7, 0, 8, 0, 3, 9, 9],
    [1, 4, 2, 5, 8, 7, 7, 0, 0, 7, 1, 2, 1, 2, 7, 7, 7, 4],
    [3, 9, 7, 9, 5, 8, 9, 5, 6, 9, 8, 8, 0, 1, 4, 2, 8, 2],
    [1, 5, 2, 2, 2, 5, 6, 3, 9, 3, 1, 7, 9, 6, 8, 6, 8, 3],
    [5, 7, 8, 3, 8, 8, 3, 9, 9, 8, 1, 9, 2, 5, 4, 7, 7, 7],
    [2, 3, 2, 4, 8, 5, 1, 7, 2, 9, 5, 2, 4, 2, 9, 2, 8, 7],
    [0, 1, 6, 1, 1, 0, 0, 6, 5, 4, 3, 4, 3, 7, 9, 6, 1, 9]
]))
