// const checkPossibility = nums => {
//     const len = nums.length
//     if (len <= 2) return true
//     let count = 0
//     for (let i = 0; i < len - 1; i++) {
//         if (nums[i] <= nums[i + 1]) continue
//         if (nums[i - 1] <= nums[i + 1] || nums[i - 1] === undefined) {
//             nums[i] = nums[i + 1]
//             count++
//         }else {
//             nums[i + 1] = nums[i]
//             count++
//         }
//     }
//     return count <= 1
// }

const checkPossibility = nums => {
    let count = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) continue
        nums[i - 1] <= nums[i + 1] || nums[i - 1] === undefined ? nums[i] = nums[i + 1] : nums[i + 1] = nums[i]
        count++
    }
    return count <= 1
}


console.log(checkPossibility([1]))
console.log(checkPossibility([3, 2]))
console.log(checkPossibility([4, 2, 3]))
console.log(checkPossibility([4, 2, 1]))
console.log(checkPossibility([1, 2, 3]))
console.log(checkPossibility([0, 4, 2, 3]))
console.log(checkPossibility([3, 4, 2, 3]))
console.log(checkPossibility([3, 3, 3, 3, 3]))