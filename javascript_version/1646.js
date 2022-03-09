const getMaximumGenerated = n => {
    const nums = [0, 1]
    let i = 1
    while (2 * i <= n) {
        nums[2 * i] = nums[i]
        nums[2 * i + 1] = nums[i] + nums[i + 1]
        i++
    }
    return Math.max(...nums.slice(0, n + 1))
}
console.log(getMaximumGenerated(0))
console.log(getMaximumGenerated(1))
console.log(getMaximumGenerated(2))
console.log(getMaximumGenerated(7))
console.log(getMaximumGenerated(8))
