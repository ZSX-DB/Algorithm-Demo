/**
 * 二分查找模板
 * @param nums
 * @param target
 * @returns {boolean}
 */
const binarySearch = (nums, target) => {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (nums[mid] > target) {
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            return true
        }
    }
    return false
}

const nums = [1, 3, 5, 7, 9, 11, 13]
console.log(binarySearch(nums, 4))
console.log(binarySearch(nums, 11))
console.log(binarySearch(nums, 7))
console.log(binarySearch(nums, 6))
console.log(binarySearch(nums, -1))
