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
// const containsNearbyAlmostDuplicate = (nums, k, t) => {
//     if (k === 0) return false
//     const window = nums.slice(0, k)
//     for (let i = 0; i < nums.length; i++) {
//         window.shift()
//         window.push(nums[i + k])
//         if (window.find(item => item <= nums[i] + t && item >= nums[i] - t) !== undefined) return true
//     }
//     return false
// }

// 桶
const containsNearbyAlmostDuplicate = (nums, k, t) => {
    // t+1 为桶的范围
    const getID = x => x < 0 ? Math.floor((x + 1) / (t + 1)) - 1 : Math.floor(x / (t + 1))
    const bucket = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        // id 为当前桶
        const id = getID(num)
        // 存在则说明两个两个元素再同一个桶里
        if (bucket.has(id)) return true
        // 可能刚好在相邻桶里
        if (bucket.has(id - 1) && Math.abs(num - bucket.get(id - 1)) <= t) return true
        if (bucket.has(id + 1) && Math.abs(num - bucket.get(id + 1)) <= t) return true
        bucket.set(id, num)
        if (i >= k) bucket.delete(getID(nums[i - k]))
    }
    return false
}

// console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
// console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 3, 5, 9], 2, 3))
// console.log(containsNearbyAlmostDuplicate([], 2, 3))
// console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 0, 0))
// console.log(containsNearbyAlmostDuplicate([0, 5, 0], 2, 4))
