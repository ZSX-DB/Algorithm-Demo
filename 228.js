/**
 * 228、汇总区间
 * 给定一个无重复元素的有序整数数组 nums 。
 * 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。
 * 也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x。
 * 链接：https://leetcode-cn.com/problems/summary-ranges/
 */


const summaryRanges = nums => {
    const list = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === nums[i] + 1 || nums[i + 1] === nums[i]) {
            const tmp = nums[i]
            while (nums[i + 1] === nums[i] + 1 || nums[i + 1] === nums[i]) {
                i++
            }
            list.push(`${tmp}->${nums[i]}`)
        } else {
            list.push(String(nums[i]))
        }
    }
    return list
}

// 记录起始点和终点
// const summaryRanges = nums => {
//     const res = []
//     const len = nums.length
//     let i = 0
//     while (i < len) {
//         const low = i
//         while (nums[i] + 1 === nums[i + 1]) {
//             i++
//         }
//         const high = i
//         let tmp = `${nums[low]}`
//         if (low < high) {
//             tmp += `->${nums[high]}`
//         }
//         res.push(tmp)
//         i++
//     }
//     return [...new Set(res)]
// }

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
console.log(summaryRanges([]))
console.log(summaryRanges([-1]))
console.log(summaryRanges([0]))