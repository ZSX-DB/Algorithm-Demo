// 最长上升子序列变形题
const largestDivisibleSubset = nums => {
    const dp = nums.sort((a, b) => a - b).map(() => ({
        max: 1,
        list: []
    }))
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                const tmp = dp[i].max
                dp[i].max = Math.max(dp[i].max, dp[j].max + 1)
                if (dp[i].max !== tmp) dp[i].list = [...dp[j].list, nums[j]]
            }
        }
    }
    let maxIdx = 0
    let maxLen = dp[0].list.length
    dp.forEach((item, idx) => {
        if (item.list.length > maxLen) {
            maxLen = item.list.length
            maxIdx = idx
        }
    })
    dp[maxIdx].list.push(nums[maxIdx])
    return dp[maxIdx].list
}

// const largestDivisibleSubset = nums => {
//     const len = nums.length
//     nums.sort((a, b) => a - b)
//     const dp = new Array(len).fill(1)
//     let maxSize = 1
//     let maxVal = dp[0]
//     for (let i = 1; i < len; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] % nums[j] === 0) dp[i] = Math.max(dp[i], dp[j] + 1)
//         }
//         if (dp[i] > maxSize) {
//             maxSize = dp[i]
//             maxVal = nums[i]
//         }
//     }
//
//     // 倒推获得最大子集
//     const res = []
//     if (maxSize === 1) return [nums[0]]
//     for (let i = len - 1; i >= 0 && maxSize > 0; i--) {
//         if (dp[i] === maxSize && maxVal % nums[i] === 0) {
//             res.push(nums[i])
//             maxVal = nums[i]
//             maxSize--
//         }
//     }
//     return res
// }

console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]))
console.log(largestDivisibleSubset([1, 2, 3]))
console.log(largestDivisibleSubset([1, 2, 8, 4]))
console.log(largestDivisibleSubset([9, 18, 54, 90, 108, 180, 360, 540, 720, 822]))
