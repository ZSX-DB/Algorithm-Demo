// const jump = nums => {
//     let position = nums.length - 1
//     let steps = 0
//     while (position > 0) {
//         for (let i = 0; i < position; i++) {
//             if (i + nums[i] >= position) {
//                 position = i
//                 steps++
//                 break
//             }
//         }
//     }
//     return steps
// }

const jump = nums => {
    const len = nums.length
    let steps = 0
    let end = 0
    let maxPosition = 0
    for (let i = 0; i < len - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i])
        if (i === end) {
            end = maxPosition
            steps++
        }
    }
    return steps
}


console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([1, 2]))
console.log(jump([3, 2, 1]))
console.log(jump([2, 2, 1]))
console.log(jump([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0]))
