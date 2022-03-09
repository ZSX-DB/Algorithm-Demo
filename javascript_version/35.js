// 一次遍历
// const searchInsert = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) return i
//     }
//     return nums.length
// }


// 由于是升序数组，可以用二分查找
const searchInsert = (nums, target) => {
    const len = nums.length
    let left = 0
    let right = len - 1
    let res = len
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            res = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return res
}

console.log(searchInsert([1, 3, 5, 6], 3))
console.log(searchInsert([1, 3, 5, 6], 4))
console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1], 1))
console.log(searchInsert([1, 3, 5], 3))
