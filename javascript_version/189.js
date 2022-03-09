/**
 * 189、旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 链接：https://leetcode-cn.com/problems/rotate-array/
 */

const rotate = (nums, k) => {
    const len = nums.length
    const copyNums = []
    for (let i = 0; i <= k; i++) {
        if (copyNums.length > len + k) break
        copyNums.push(...nums)
    }
    // 对copyNums使用滑动窗口
    const copyLen = copyNums.length
    return copyNums.slice(copyLen-k-len, copyLen-k)
}

// const rotate = (nums, k) => {
//     const len = nums.length
//     const list = []
//     for (let i = 0; i < len; i++) {
//         list[(i+k)%len] = nums[i]
//     }
//     return list
// }

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1, -100, 3, 99], 2))
console.log(rotate([-1, -2], 7))
console.log(rotate([1,5,7,9], 0))
console.log(rotate([1, 2, 3], 4))
console.log(rotate([1], 1))

