// 滑动窗口
const findMaxAverage = (nums, k) => {
    let cur = nums.slice(0, k).reduce((pre, cur) => pre + cur)
    let max = cur
    for (let i = k; i < nums.length; i++) {
        cur = cur + nums[i] - nums[i - k]
        max = Math.max(max, cur)
    }
    return max / k
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 4], 4))
console.log(findMaxAverage([3, 5, 7, 9], 4))



