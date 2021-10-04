/**
 * 18、四数之和
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 链接：https://leetcode-cn.com/problems/4sum/
 */

function fourSum(nums, target) {
    const list = []
    const len = nums.length
    if (len < 4) return list
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        // 如果最小的四个值都超过target,则无任何符合情况
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
        // 当前值与最大的三个值相加小于target, 则枚举到i+1
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue
        for (let j = i + 1; j < len - 2; j++) {
            // 与上方同理
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
            if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue
            // 双指针取值
            let left = j + 1
            let right = len - 1
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum === target) {
                    list.push([nums[i], nums[j], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    left++
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--
                    }
                    right--
                } else if (sum > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    }
    return list
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
