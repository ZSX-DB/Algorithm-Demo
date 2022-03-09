// 该问题属于 01 背包问题

// dp[i] 表示和为 i 最多有多少种组合方案
const combinationSum4 = (nums, target) => {
    nums.sort((x, y) => x - y)
    const dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i < target + 1; i++) {
        nums.forEach(num => {
            if (i >= num) dp[i] += dp[i - num]
        })
    }
    return dp[target]
}


console.log(combinationSum4([1, 2, 3], 4))
