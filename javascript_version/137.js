/**
 * 56、只出现一次的次数 II
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 链接：https://leetcode-cn.com/problems/single-number-ii/
 */

// const singleNumber = nums => nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num))

// 排序，循环判断
// const singleNumber = nums => {
//     nums.sort((a, b) => a - b)
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i]
//     }
//     return nums[0]
// }

// 去重后 3 倍和减去原数组和即原来的只出现一次数的两倍
const singleNumber = nums => ([...new Set(nums)].reduce((pre, cur) => pre + cur) * 3 - nums.reduce((pre, cur) => pre + cur)) / 2

// 异或门
// const singleNumber = nums => {
//     let seenOnce = 0
//     let seenTwice = 0
//     for (let i = 0; i < nums.length; i++) {
//         seenOnce = ~seenTwice & (seenOnce ^ nums[i])
//         seenTwice = ~seenOnce & (seenTwice ^ nums[i])
//     }
//     return seenOnce
// }

console.log(singleNumber([2, 2, 3, 2]))

