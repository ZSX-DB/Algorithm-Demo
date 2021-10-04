// const containsNearbyDuplicate = (nums, k) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j] && j - i <= k) return true
//         }
//     }
//     return false
// }

const containsNearbyDuplicate = (nums, k) => {
    const collect = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (collect.has(nums[i]) && i - collect.get(nums[i]) <= k) return true
        collect.set(nums[i], i)
    }
    return false
}


