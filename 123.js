/**
 * 123、买卖股票的最佳时机 III
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 */


const maxProfit = prices => {
    const len = prices.length
    let buy1 = -prices[0]
    let buy2 = -prices[0]
    let sell1 = 0
    let sell2 = 0
    for (let i = 0; i < len; i++) {
        buy1 = Math.max(buy1, -prices[i])
        sell1 = Math.max(sell1, buy1 + prices[i])
        buy2 = Math.max(sell1-prices[i], buy2)
        sell2 = Math.max(sell2, buy2 + prices[i])
    }
    return sell2
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
