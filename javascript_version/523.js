// const checkSubarraySum = (nums, k) => {
//     const len = nums.length
//     const sums = [0]
//     const record = new Map()
//     for (let i = 1; i <= len; i++) {
//         sums[i] = sums[i - 1] + nums[i - 1]
//     }
//     for (let i = 2; i <= len; i++) {
//         record.set(sums[i - 2] % k, true)
//         if (record.has(sums[i] % k)) return true
//     }
//     return false
// }

// 可简写为以下
const checkSubarraySum = (nums, k) => {
    const sums = [0, nums[0]]
    const record = new Map()
    for (let i = 2; i <= nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i - 1]
        record.set(sums[i - 2] % k, true)
        if (record.has(sums[i] % k)) return true
    }
    return false
}

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13))
