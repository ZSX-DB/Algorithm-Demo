// const maxProfit = (prices, fee) => {
//     const len = prices.length
//     // 定义状态 dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润，dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润
//     const dp = new Array(len).fill(undefined).map(() => [0, 0])
//     dp[0][0] = 0
//     dp[0][1] = -prices[0]
//     for (let i = 1; i < len; i++) {
//         // 存在两种情况，一是前天无股票，二是前天有，今天卖
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
//         // 存在两种情况，一是前天已有，二是今天买
//         dp[i][1] = Math.max(dp[i - 1][1], dp[i-1][0] - prices[i])
//     }
//     return dp[len - 1][0]
// }

// 优化
const maxProfit = (prices, fee) => {
    let sell = 0
    let buy = -prices[0]
    for (let i = 1; i < prices.length; i++) {
        sell = Math.max(sell, buy + prices[i] - fee)
        buy = Math.max(buy, sell - prices[i])
    }
    return sell
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3))
console.log(maxProfit([1, 3, 2, 9, 2, 17, 4, 66, 8, 4, 9, 2, 4, 5, 6, 2, 1, 21, 55], 2))