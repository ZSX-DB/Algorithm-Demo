// 巴什博奕
const canWinNim = n => n % 4 !== 0

// 动态规划
// const canWinNim = n => {
//     const dp = [null, true, true, true]
//     for (let i = 4; i <= n; i++) {
//         dp[i] = !dp[i - 1] || !dp[i - 2] || !dp[i - 3]
//     }
//     return dp[dp.length - 1]
// }

// 优化，只存储最后三个节点
// const canWinNim = n => {
//     if (n <= 3) return true
//     let f = true, s = true, t = true
//     let val
//     for (let i = 4; i <= n; i++) {
//         val = !f || !s || !t
//         f = s
//         s = t
//         t = val
//     }
//     return val
// }


console.log(canWinNim(1), canWinNim(2), canWinNim(4), canWinNim(25), canWinNim(26), canWinNim(27), canWinNim(28))
console.log(canWinNim(793887532))