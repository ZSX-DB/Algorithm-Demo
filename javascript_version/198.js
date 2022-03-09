const rob = nums => {
    const len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    const dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[dp.length - 1]
}

console.log(rob([3, 5]))
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))