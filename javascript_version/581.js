// const findUnsortedSubarray = nums => {
//     const len = nums.length
//     const numsCopy = [...nums].sort((x, y) => x - y)
//     let start
//     let end
//     for (let i = 0; i < len; i++) {
//         if (nums[i] !== numsCopy[i]) {
//             start = i
//             break
//         }
//     }
//     for (let i = len - 1; i >= 0; i--) {
//         if (nums[i] !== numsCopy[i]) {
//             end = i
//             break
//         }
//     }
//     return (start === undefined || end === undefined) ? 0 : (end - start + 1)
// }

const findUnsortedSubarray = nums => {
    const len = nums.length
    let MAX = Infinity
    let MIN = -Infinity
    let left = 0
    let right = len - 1
    while (left < right && nums[left] <= nums[left + 1]) {
        left++
    }
    while (left < right && nums[right] >= nums[right - 1]) {
        right--
    }
    // 此时 left 包含 left 均满足单调递增，right 包含 right 均满足单调递减
    let start = left
    let end = right
    let min = nums[left]
    let max = nums[right]
    for (let i = start; i <= end; i++) {
        if (nums[i] < min) {
            while (left >= 0 && nums[left] > nums[i]){
                left--
            }
            min = (left >= 0 ? nums[left] : MIN)
        }
        if (nums[i] > max) {
            while (right < len && nums[right] < nums[i]){
                right++
            }
            max = (right < len ? nums[right] : MAX)
        }
    }
    return right === left ? 0 : (right - left - 1)
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 11, 9, 10, 15]))
console.log(findUnsortedSubarray([1, 2, 3, 4]))
console.log(findUnsortedSubarray([1, 3, 2, 4]))
console.log(findUnsortedSubarray([1]))
