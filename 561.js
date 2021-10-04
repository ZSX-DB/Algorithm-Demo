// const arrayPairSum = nums => {
//     nums.sort((a, b) => a - b)
//     let count = 0
//     for (let i = 0; i < nums.length; i += 2) {
//         count += nums[i]
//     }
//     return count
// }

// 简化
const arrayPairSum = nums => nums.sort((a, b) => a - b).reduce((pre, cur, idx) => idx % 2 ? pre : pre + cur)


console.log(arrayPairSum([1, 4, 2, 3]))
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))
console.log(arrayPairSum([-470, 66, -4835, -5623]))
