// const findPeakElement = nums => {
//     nums = [-Infinity, ...nums, -Infinity]
//     for (let i = 1; i < nums.length - 1; i++) {
//         if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i - 1
//     }
//     return nums
// }

// const findPeakElement = nums => {
//     const search = (left, right) => {
//         if (left === right) return left
//         const mid = Math.floor((left + right) / 2)
//         if (nums[mid] > nums[mid + 1]) {
//             return search(left, mid)
//         } else {
//             return search(mid + 1, right)
//         }
//     }
//     return search(0, nums.length - 1)
// }

const findPeakElement = nums => {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        nums[mid] > nums[mid + 1] ? right = mid : left = mid + 1
    }
    return left
}


console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
