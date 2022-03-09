const change = (amount, coins) => {
    const dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    coins.forEach(coin => {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]
        }
    })
    return dp[amount]
}

console.log(change(5, [1, 2, 5]))
