const minPairSum = nums => {
    nums.sort((x, y) => x - y)
    let left = 0
    let right = nums.length - 1
    const collect = []
    while (left < right) {
        collect.push(nums[left] + nums[right])
        left++
        right--
    }
    return Math.max(...collect)
}

console.log(minPairSum([3, 5, 2, 3]))
