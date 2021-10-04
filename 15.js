/**
 * 15、三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 链接：https://leetcode-cn.com/problems/3sum
 */

const threeSum = nums => {
    nums.sort((x, y) => x - y)
    const len = nums.length
    const result = []
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = len - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            }
        }
    }
    return result
}


console.log(threeSum([]))
console.log(threeSum([-1]))
console.log(threeSum([-1, 0]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([0, 0, 0, 0, 0, 0, 0, 1]))
console.log(threeSum([-2, 0, 1, 1, 2]))
console.log(threeSum([34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57, -6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47, 61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49]))
