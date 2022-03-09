// 该问题属于 01 背包问题

// 回溯
// const findTargetSumWays = (nums, target) => {
//     nums.unshift(0)
//     let count = 0
//     const helper = (val, idx) => {
//         if (idx === nums.length) {
//             val === target && count++
//         } else {
//             helper(val - nums[idx], idx + 1)
//             helper(val + nums[idx], idx + 1)
//         }
//     }
//     helper(0, 1)
//     return count
// }

/**
 * 动态规划
 * 如何推出 (sum - target) % 2 === 1，设 x 为 正数和，设 y 为负数和，符合要求
 * x + y = sum 并且 x - y = target 可推出 x = (sum + target) / 2，由于题意是整数数组，如果 x 为小数肯定错误
 * 因此题意可转化为累加部分 num 之和能否等于 (sum + target) / 2
 * @param nums
 * @param target
 * @returns {number}
 */
const findTargetSumWays = (nums, target) => {
    const sum = nums.reduce((preSum, num) => preSum + num, 0)
    if (nums.length === 0 || sum < target || (sum + target) % 2 === 1) return 0
    const x = (sum + target) / 2
    const dp = new Array(x + 1).fill(0).map((_, idx) => idx === 0 ? 1 : 0)
    nums.forEach(num => {
        for (let i = x; i >= num; i--) {
            dp[i] = dp[i] + dp[i - num]
        }
    })
    return dp[x]
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
console.log(findTargetSumWays([1], 1))
