/**
 * 16、最接近的三数之和
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 链接：https://leetcode-cn.com/problems/3sum-closest/
 */

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b)

    let len = nums.length,
        res = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < len; i++) {
        let left = i + 1,
            right = len - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(res - target) > Math.abs(sum - target)) {
                res = sum
            } else if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else if (sum === target) {
                return res
            }
        }

    }

    return res

}


console.log(threeSumClosest([-1, 2, 1, -4], 1))

