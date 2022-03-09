// const insert = (intervals, newInterval) => {
//     const res = []
//     const list = [...intervals, newInterval].sort((a, b) => a[0] - b[0])
//     let pre = list[0]
//     for (let i = 1; i < list.length; i++) {
//         const cur = list[i]
//         if (cur[0] <= pre[1]) {
//             pre[1] = Math.max(pre[1], cur[1])
//         } else {
//             res.push(pre)
//             pre = cur
//         }
//     }
//     return [...res, pre]
// }

const insert = (intervals, newInterval) => {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > intervals[i - 1][1]) continue
        intervals[i][1] >= intervals[i - 1][1] ? intervals.splice(i - 1, 2, [intervals[i - 1][0], intervals[i][1]]) : intervals.splice(i, 1)
        i--
    }
    return intervals
}

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))

