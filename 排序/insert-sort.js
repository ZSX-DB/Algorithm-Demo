/**
 * 插入排序
 * @param nums
 * @returns {*}
 */
const insertSort = nums => {
    const len = nums.length
    let preIdx
    let cur
    for (let i = 0; i < len; i++) {
        preIdx = i - 1
        cur = nums[i]
        while (preIdx >= 0 && nums[preIdx] > cur) {
            nums[preIdx + 1] = nums[preIdx]
            preIdx--
        }
        nums[preIdx + 1] = cur
    }
    return nums
}

console.log(insertSort([7, 5, 7, 13, 2, 9, 21, 99, 16, -3, 2]))
