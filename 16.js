/**
 * 16、最接近的三数之和
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 链接：https://leetcode-cn.com/problems/3sum-closest/
 */


const threeSumClosest = (nums, target) => {
    nums.sort((x, y) => x - y)
    const sums = []
    const len = nums.length
    for (let i = 0; i < len; i++) {
        let left = i + 1
        let right = len - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            sums.push(sum)
            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                return target
            }
        }
    }
    let res = Infinity
    for (const sum of sums) {
        if (Math.abs(target - sum) < Math.abs(target - res)) {
            res = sum
        }
    }
    return res
}


console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 1, 2], 0))

