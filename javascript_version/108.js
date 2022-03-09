// 中序遍历，总是选择中间位置左边的数字作为根节点
const sortedArrayToBST = nums => {
    const helper = (nums, mid = Math.floor(nums.length / 2)) => nums.length ? {
        val: nums[mid],
        left: helper(nums.slice(0, mid)),
        right: helper(nums.slice(mid + 1))
    } : null
    return helper(nums)
}

// 使用索引标记数组
// const sortedArrayToBST = nums => {
//     const helper = (left, right) => {
//         if (left > right) return null
//         const mid = Math.floor((left + right) / 2)
//         return {
//             val: nums[mid],
//             left: helper(left, mid - 1),
//             right: helper(mid + 1, right)
//         }
//     }
//     return helper(0, nums.length - 1)
// }


console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
