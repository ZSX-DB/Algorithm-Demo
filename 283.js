// const moveZeroes = nums => {
//     const zeroCount = nums.filter(num => num === 0).length
//     const len = nums.length
//     const verify = nums => {
//         for (let i = len - 1; i >= (len - zeroCount); i--) {
//             if (nums[i] !== 0) return true
//         }
//         return false
//     }
//     while (verify(nums)) {
//         const firstZeroIdx = nums.indexOf(0)
//         for (let i = firstZeroIdx; i < len - 1; i++) {
//             nums[i] = nums[i + 1]
//         }
//         nums[len - 1] = 0
//     }
//     return nums
// }

// 双指针
const moveZeroes = nums => {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) nums[j++] = nums[i]
    }
    while (j < nums.length) {
        nums[j++] = 0
    }
    return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
