const climbStairs = n => {
    if (n === 1) return 1
    if (n === 2) return 2
    const dp = new Array(n).fill(0)
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {

        // dp[i - 1] 只能走 1 阶没有选择
        // dp[i - 2] 可以衍生出 1 1 和 2 的走法，但 dp[i - 1] 已经包括了 1 1 的走法，因此 dp[i - 2] 只能走 2 阶没有选择
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

// const climbStairs = n => {
//     let x = 0
//     let y = 0
//     let z = 1
//     for (let i = 1; i <= n; i++) {
//         x = y
//         y = z
//         z = x + y
//     }
//     return z
// }

// const climbStairs = n => {
//     const sqrt5 = Math.sqrt(5)
//     return Math.round((Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)) / sqrt5)
// }

console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
