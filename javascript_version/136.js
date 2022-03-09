/**
 * 56、只出现一次的次数 I
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 链接：https://leetcode-cn.com/problems/single-number/
 */

// const singleNumber = nums => nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num))

// const singleNumber = nums => {
//     nums.sort((a, b) => a - b)
//     for (let i = 1; i < nums.length; i += 2) {
//         if (nums[i] !== nums[i - 1]) return nums[i - 1]
//     }
//     return nums[nums.length - 1]
// }

/**
 * 使用异或 (具体参考异或性质)
 * @param nums
 * @returns {number}
 */
// const singleNumber = nums => {
//     let res = 0
//     for (const num of nums) {
//         res ^= num
//     }
//     return res
// }

// const singleNumber = nums => ([...new Set(nums)].reduce((pre, cur) => pre + cur) * 2 - nums.reduce((pre, cur) => pre + cur))

const singleNumber = nums => nums.reduce((pre, cur) => pre ^ cur, 0)

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
