/**
 * 冒泡排序
 * @param nums
 * @returns {*}
 */
const bubbleSort = nums => {
    const len = nums.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        }
    }
    return nums
}

console.log(bubbleSort([7, 5, 7, 13, 2, 9, 21, 99, 16, -3, 2]))
