const thirdMax = (nums) => {
    nums = [...new Set(nums)].sort((x, y) => y - x)
    return nums[nums.length >= 3 ? 2 : 0]
}

console.log(thirdMax([2, 2, 3, 1]))
