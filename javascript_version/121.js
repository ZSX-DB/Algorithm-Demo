const maxProfit = prices => {
    let buy = -prices[0]
    let sell = 0
    for(let i=1;i<prices.length;i++){
        buy = Math.max(-prices[i], buy)
        sell = Math.max(buy+prices[i], sell)
    }
    return sell
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
