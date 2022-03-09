/**
 * 56、合并区间
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 链接：https://leetcode-cn.com/problems/merge-intervals/
 */

// const merge = intervals => {
//     intervals.sort((a, b) => a[0] - b[0])
//     for (let i = 1; i < intervals.length; i++) {
//         if (intervals[i][0] > intervals[i - 1][1]) continue
//         intervals[i][1] >= intervals[i - 1][1] ? intervals.splice(i - 1, 2, [intervals[i - 1][0], intervals[i][1]]) : intervals.splice(i, 1)
//         i--
//     }
//     return intervals
// }

const merge = intervals => {
    intervals.sort((a, b) => a[0] - b[0])
    const res = []
    let pre = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i]
        if (cur[0] <= pre[1]) {
            pre[1] = Math.max(pre[1], cur[1])
        } else {
            res.push(pre)
            pre = cur
        }
    }
    res.push(pre)
    return res
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
// console.log(merge([[1, 6], [2, 6], [8, 10], [15, 18]]))
// console.log(merge([[1, 4], [4, 6], [8, 10], [15, 18]]))
// console.log(merge([[1, 6], [2, 3], [8, 10], [15, 18]]))
// console.log(merge([[1, 2], [3, 6], [8, 10], [15, 18]]))
// console.log(merge([[1, 4], [0, 2], [3, 5]]))
// console.log(merge([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]))
// console.log(merge([[0, 0], [1, 4]]))
// console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]))
