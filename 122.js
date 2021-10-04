/**
 * 122、买卖股票的最佳时机 II
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

// 贪心算法
// const maxProfit = prices => {
//     let money = 0
//     let buy = prices[0]
//     let sell = 0
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] <= prices[i - 1] && prices[i] < prices[i + 1]) buy = prices[i]
//         if (prices[i] > prices[i - 1] && (prices[i] >= prices[i + 1] || prices[i + 1] === undefined)) {
//             sell = prices[i]
//             money += (sell - buy)
//         }
//     }
//     return money
// }

// 优化版
const maxProfit = prices => {
    let money = 0
    for(let i=1;i<prices.length;i++){
        money+=Math.max(0, prices[i]-prices[i-1])
    }
    return money
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 3, 1, 3, 1, 3]))
console.log(maxProfit([5, 7, 2, 7, 3, 3, 5, 3, 0]))
console.log(maxProfit([5, 7, 7, 7, 2, 7, 3, 3, 5, 3, 0]))
