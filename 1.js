/**
 * 1、两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 链接：https://leetcode-cn.com/problems/two-sum
 */

// const twoSum = (nums, target) => {
//     const flags = nums.reduce((total, num, index) => {
//         total.set(num, total.has(num) ? [...total.get(num), index] : [index])
//         return total
//     }, new Map())
//     for (const key of flags.keys()) {
//         if (flags.has(target - key) === false) continue
//         if (target - key === key && flags.get(key).length === 1) continue
//         if (target - key === key && flags.get(key).length === 2) return flags.get(key)
//         return [flags.get(key)[0], flags.get(target - key)[0]]
//     }
// }

const twoSum = (nums, target) => {
    const flags = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (flags.has(target - num)) {
            return [flags.get(target - num), i]
        } else {
            flags.set(num, i)
        }
    }
}

console.log(twoSum([1, 2, 4, 4, 5], 9))
console.log(twoSum([3, 4, 5], 8))
console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2, 7, 11, 15], 13))
