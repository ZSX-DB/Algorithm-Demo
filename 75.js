// const sortColors = nums => nums.sort((a, b) => a - b)

const sortColors = nums => {
    let zeroFlag = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[zeroFlag]] = [nums[zeroFlag], nums[i]]
            zeroFlag++
        }
    }
    let twoFlag = nums.length - 1
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 2) {
            [nums[i], nums[twoFlag]] = [nums[twoFlag], nums[i]]
            twoFlag--
        }
    }
    return nums
}

console.log(sortColors([2, 1]))
console.log(sortColors([2, 0, 2, 1, 1, 0]))
