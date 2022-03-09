/**
 * 18、四数之和
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 链接：https://leetcode-cn.com/problems/4sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
    const threeSum = (nums, target) => {
        const length = nums.length
        const result = []
        for (let i = 0; i < length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue
            }
            let left = i + 1
            let right = length - 1
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right]
                if (sum > target) {
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    result.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                }
            }
        }
        return result
    }
    const record = new Set()
    nums.sort((x, y) => x - y)
    for (let i = 0; i < nums.length; i++) {
        threeSum(nums.slice(i + 1), target - nums[i])
            .map(item => [...item, nums[i]].sort((x, y) => x - y))
            .forEach(item => {
                record.add(JSON.stringify(item))
            })
    }
    return [...record].map(item => JSON.parse(item))
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
