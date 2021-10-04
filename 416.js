// 该问题属于 01 背包问题

// dp[i] 表示和为 i 的组合总数
const canPartition = nums => {
    const sum = nums.reduce((total, num) => total + num, 0)
    if (sum % 2 === 1) return false
    const halfSum = sum / 2
    const dp = new Array(halfSum + 1).fill(0)
    dp[0] = 1
    nums.forEach(num => {
        for (let i = halfSum; i >= num; i--) {
            dp[i] += dp[i - num]
        }
    })
    return dp[halfSum] !== 0
}

console.log(canPartition([1, 5, 11, 5]))
