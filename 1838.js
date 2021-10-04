// const maxFrequency = (nums, k) => {
//     nums.sort((x, y) => x - y)
//     const collect = new Map()
//     for (const num of nums) {
//         collect.set(num, (collect.get(num) || 0) + 1)
//     }
//     let max = Math.max(...collect.values())
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) continue
//         let copyK = k
//         let count = collect.get(nums[i])
//         for (let j = i - 1; j >= 0; j--) {
//             copyK -= (nums[i] - nums[j])
//             if (copyK < 0) break
//             count++
//         }
//         max = Math.max(max, count)
//     }
//     return max
// }

const maxFrequency = (nums, k) => {
    nums.sort((x, y) => x - y)
    const len = nums.length
    let left = 0
    let sum = 0
    let max = 1
    for (let right = 1; right < len; right++) {
        sum += (nums[right] - nums[right - 1]) * (right - left)
        while (sum > k) {
            sum -= (nums[right] - nums[left])
            left++
        }
        max = Math.max(max, right - left + 1)
    }
    return max
}

console.log(maxFrequency([1, 1, 1, 1, 1, 1, 1, 20], 19))
console.log(maxFrequency([1, 2, 4], 5))
console.log(maxFrequency([1, 4, 8, 13], 5))
console.log(maxFrequency([3, 9, 6], 2))
console.log(maxFrequency([1, 4, 9, 8, 13], 6))
console.log(maxFrequency([1, 4, 8, 9, 13], 6))
