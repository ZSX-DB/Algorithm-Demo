// 该问题属于 01 背包问题

// 回溯，超时
// const findMaxForm = (strs, m, n) => {
//     const counts = strs.map(str => [str.replace(/1/g, '').length, str.replace(/0/g, '').length])
//     let res = 0
//     const helper = (cm, cn, idx, num) => {
//         if (cm <= m && cn <= n) res = Math.max(res, num)
//         if (idx === strs.length || cm > m || cn > n) return
//         helper(cm, cn, idx + 1, num)
//         helper(cm + counts[idx][0], cn + counts[idx][1], idx + 1, num + 1)
//     }
//     helper(0, 0, 0, 0)
//     return res
// }

// 动态规划
const findMaxForm = (strs, m, n) => {
    strs = strs.map(str => [str.replace(/1/g, '').length, str.replace(/0/g, '').length])
    const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    for (let i = 0; i < strs.length; i++) {
        const [c0, c1] = strs[i]
        for (let j = m; j >= c0; j--) {
            for (let k = n; k >= c1; k--) {
                dp[j][k] = Math.max(dp[j - c0][k - c1] + 1, dp[j][k])
            }
        }
    }
    return dp[m][n]
}

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
console.log(findMaxForm(['10', '0', '1'], 1, 1))
console.log(findMaxForm(['10', '0', '1'], 2, 2))
console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 3, 4))
console.log(findMaxForm(['0', '11', '1000', '01', '0', '101', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0110101', '0', '11', '01', '00', '01111', '0011', '1', '1000', '0', '11101', '1', '0', '10', '0111'], 9, 80))
