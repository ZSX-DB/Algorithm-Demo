// 前缀和
// const numSubarraysWithSum = (nums, goal) => {
//     let count = 0
//     let sum = 0
//     const sums = [0]
//     for (const num of nums) {
//         sum += num
//         sums.push(sum)
//     }
//     for (let i = 0; i < sums.length; i++) {
//         for (let j = i + 1; j < sums.length; j++) {
//             const diff = sums[j] - sums[i]
//             if (diff === goal) {
//                 count++
//             } else if (diff > goal) {
//                 break
//             }
//         }
//     }
//     return count
// }


// 前缀和（哈希表优化）
const numSubarraysWithSum = (nums, goal) => {
    let count = 0
    let sum = 0
    const collect = new Map()
    for (const num of nums) {
        collect.set(sum, (collect.get(sum) || 0) + 1)
        sum += num
        count += (collect.get(sum - goal) || 0)
    }
    return count
}

// 滑动窗口
// const numSubarraysWithSum = (nums, goal) => {
//     let left1 = 0
//     let left2 = 0
//     let right = 0
//     let sum1 = 0
//     let sum2 = 0
//     let count = 0
//     while (right < nums.length) {
//         sum1 += nums[right]
//         while (left1 <= right && sum1 > goal) {
//             sum1 -= nums[left1]
//             left1++
//         }
//         sum2 += nums[right]
//         while (left2 <= right && sum2 >= goal) {
//             sum2 -= nums[left2]
//             left2++
//         }
//         count += (left2 - left1)
//         right++
//     }
//     return count
// }

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0))
