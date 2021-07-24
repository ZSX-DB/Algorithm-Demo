// const isCovered = function (ranges, left, right) {
//     const flags = Array(51).fill(0)
//     for (const range of ranges) {
//         const [start, end] = range
//         for (let i = start; i <= end; i++) {
//             flags[i] = 1
//         }
//     }
//     for (let i = left; i <= right; i++) {
//         if (flags[i] === 0) return false
//     }
//     return true
// }

// const isCovered = function (ranges, left, right) {
//     for (let i = left; i <= right; i++) {
//         let flag = false
//         for (const range of ranges) {
//             const [start, end] = range
//             if (start <= i && end >= i) {
//                 flag = true
//                 break
//             }
//         }
//         if (flag === false) return false
//     }
//     return true
// }

const isCovered = (ranges, left, right) => {
    const diff = Array(52).fill(0)
    for (const range of ranges) {
        const [start, end] = range
        diff[start]++
        diff[end + 1]--
    }

    // 通过前缀和可以判断当前位置有多少覆盖
    let cur = 0
    for (let i = 0; i < diff.length; i++) {
        cur += diff[i]
        if (left <= i && right >= i && cur <= 0) {
            return false
        }
    }
    return true
}

console.log(isCovered([[1, 2], [3, 4], [5, 6]], 2, 5))
console.log(isCovered([[1, 10], [10, 20]], 21, 21))
