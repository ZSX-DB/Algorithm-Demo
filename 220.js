// 双层暴力法
// const containsNearbyAlmostDuplicate = (nums, k, t) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) return true
//         }
//     }
//     return false
// }

// 滑动窗口
const containsNearbyAlmostDuplicate = (nums, k, t) => {
    let start = 0
    let end = 0
    while (start < end){
        if (Math.abs(nums[start] - nums[end]) <= t && Math.abs(start - end) <= k) return true
    }
}

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))
console.log(containsNearbyAlmostDuplicate([], 2, 3))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 0, 0))
