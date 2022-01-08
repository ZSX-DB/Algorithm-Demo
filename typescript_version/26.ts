const removeDuplicates = (nums: number[]): number => {
    let slow: number = 1
    let fast: number = 1
    while (fast < nums.length) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return nums.length ? slow : 0
}
