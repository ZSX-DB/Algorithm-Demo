// 该问题属于 01 背包问题
// 01 背包问题可查看 https://leetcode-cn.com/problems/target-sum/solution/yi-tao-kuang-jia-jie-jue-bei-bao-wen-ti-58wvk/

// dp[i] 表示组成 i 块钱需要的最少硬币数
const coinChange = (coins, amount) => {
    const len = amount + 1
    const dp = new Array(len).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i < len; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[len - 1] === Infinity ? -1 : dp[len - 1]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))
console.log(coinChange([186, 419, 83, 408], 6249))
