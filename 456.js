const find132pattern = nums => {
    const len = nums.length
    if (len < 3) return false
    let minIdx = 0
    while (minIdx < len) {
        const stack = [nums[minIdx]]
        for (let i = minIdx + 1; i < len; i++) {
            if (nums[i] > stack[0] && stack.length === 1) stack.push(nums[i])
            if (nums[i] > stack[1] && stack.length === 2) stack[1] = nums[i]
            if (nums[i] > stack[0] && nums[i] < stack[1]) return true
        }
        minIdx++
    }
    return false
}


console.log(find132pattern([1, 2, 3, 4]))
console.log(find132pattern([3, 1, 4, 2]))
console.log(find132pattern([-1, 3, 2, 0]))
console.log(find132pattern([3, 5, 0, 3, 4]))
console.log(find132pattern([-2, 1, 2, -2, 1, 2]))
