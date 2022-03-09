// 相同道理，使用异或运算
// const missingNumber = nums => [...nums, ...new Array(nums.length + 1).fill(0).map((_, idx) => idx)].reduce((pre, cur) => pre ^ cur)

// 边加边减
const missingNumber = nums => {
    let sum = nums.length
    for (let i = 0; i < nums.length; i++) {
        sum = sum + i - nums[i]
    }
    return sum
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 1, 0]))
console.log(missingNumber([0, 1]))
