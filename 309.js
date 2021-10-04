// const maxProfit = prices => {
//     const len = prices.length
//     if(len === 0) return 0
//
//     // dp[i][0]表示持有股票的最大收益
//     // dp[i][1]表示不持有股票且处于冷冻期的最大收益
//     // dp[i][2]表示不持有股票且不处于冷冻期的最大收益
//     const dp = new Array(len).fill(undefined).map(() => [0, 0, 0])
//
//     dp[0][0] = -prices[0]
//
//     for (let i = 1; i < len; i++) {
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
//         dp[i][1] = dp[i - 1][0] + prices[i]
//         dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
//     }
//
//     return Math.max(...dp[len - 1])
//
// }

const maxProfit = prices => {
    // 买入，卖出，冷冻
    let buy = -prices[0]
    let sell = 0
    let freeze = 0
    for (const price of prices) {
        buy = Math.max(buy, freeze - price)
        freeze = sell
        sell = Math.max(sell, buy + price)
    }

    return sell
}

console.log(maxProfit([1, 2, 3, 0, 2]))
console.log(maxProfit([1, 2, 3, 4, 17, 1]))

