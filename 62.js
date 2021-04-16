// 递归，效率低
// const uniquePaths = (m, n) => {
//     const dfs = (i, j) => (i === 1 || j === 1) ? 1 : dfs(i - 1, j) + dfs(i, j - 1)
//     return dfs(m, n)
// }

// 添加 cache
const uniquePaths = (m, n) => {
    const map = new Map()
    const dfs = (i, j) => {
        if (i === 1 || j === 1) return 1
        // 使用 - 是为了避免 (32, 3) 和 (3, 23) 的值不同
        if (map.get(`${i}-${j}`)) return map.get(`${i}-${j}`)
        const res = dfs(i - 1, j) + dfs(i, j - 1)
        map.set(`${i}-${j}`, res)
        return res
    }
    return dfs(m, n)
}

// 动态规划
// const uniquePaths = (m, n) => {
//     const dp = new Array(m).fill(1).map(() => new Array(n).fill(1))
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//         }
//     }
//     return dp[m - 1][n - 1]
// }


// const uniquePaths = (m, n) => {
//     let ans = 1
//     for (let x = n, y = 1; y < m; x++, y++) {
//         ans = Math.floor(ans * x / y)
//     }
//     return ans
// }


console.log(uniquePaths(3, 2))
console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 3))
console.log(uniquePaths(51, 9))
console.log(uniquePaths(23, 12))
console.log(uniquePaths(32, 3))
console.log(uniquePaths(3, 23))
