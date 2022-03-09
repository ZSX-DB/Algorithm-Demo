// const maximumProduct = nums => {
//     nums.sort((a, b) => a - b)
//     const len = nums.length
//     return nums[0] > 0 || nums[len - 1] < 0 ? nums[len - 1] * nums[len - 2] * nums[len - 3] : nums[len - 1] * Math.max(nums[len - 2] * nums[len - 3], nums[0] * nums[1])
// }

const maximumProduct = nums => {
    nums.sort((a, b) => a - b)
    const len = nums.length
    return Math.max(nums[len - 1] * nums[len - 2] * nums[len - 3], nums[len - 1] * nums[1] * nums[0])
}

console.log(maximumProduct([1, 2, 3]))
console.log(maximumProduct([1, 2, 3, 4]))
console.log(maximumProduct([5, 2, 6, 3]))
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]))
console.log(maximumProduct([-1, -2, -3, -4]))