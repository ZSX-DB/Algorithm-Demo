// const findLengthOfLCIS = nums => {
//     const len = nums.length
//     if (len === 0) return 0
//     let cur = 1
//     let max = 1
//     for (let i = 1; i < len; i++) {
//         if (nums[i] > nums[i - 1]) {
//             cur++
//         } else {
//             max = Math.max(cur, max)
//             cur = 1
//         }
//     }
//     max = Math.max(cur, max)
//     return max
// }

const findLengthOfLCIS = nums => {
    if (!nums.length) return 0
    let cur = 1
    let max = 1
    for (let i = 1; i < nums.length; i++) {
        nums[i] > nums[i - 1] ? cur++ : cur = 1
        max = Math.max(cur, max)
    }
    return max
}

console.log(findLengthOfLCIS([11]))
console.log(findLengthOfLCIS([]))
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
console.log(findLengthOfLCIS([1, 3, 5, 7, 9]))
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))