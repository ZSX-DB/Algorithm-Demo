// const find132pattern = nums => {
//     const len = nums.length
//     if (len < 3) return false
//     for (let i = 2; i < len; i++) {
//         if (nums[i - 2] < nums[i] && nums[i] < nums[i - 1]) return true
//     }
//     return false
// }

const find132pattern = nums => {
    const len = nums.length
    if (len < 3) return false
    let minIdx = 0
    while (minIdx < len) {
        const stack = [nums[minIdx]]
        for (let i = minIdx + 1; i < len; i++) {
            // if()
        }
    }
}

// console.log(find132pattern([1, 2, 3, 4]))
// console.log(find132pattern([3, 1, 4, 2]))
// console.log(find132pattern([-1, 3, 2, 0]))
// [3,5,0,3,4]
console.log(find132pattern([3, 5, 0, 3, 4]))
