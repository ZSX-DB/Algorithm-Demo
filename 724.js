// 暴力法
// const pivotIndex = nums => {
//     const len = nums.length
//     if (len === 0) return -1
//     if (len === 1) return 0
//     if (len === 2) return -1
//     const getSum = nums => nums.length ? nums.reduce((pre, cur) => pre + cur) : 0
//     for (let i = 0; i < len; i++) {
//         if (getSum(nums.slice(0, i)) === getSum(nums.slice(i + 1, len))) return i
//     }
//     return -1
// }

// 相比暴力法缓存了和
// const pivotIndex = nums => {
//     const len = nums.length
//     if (len <= 2) return [-1, 0, -1][len]
//     let leftSum = 0
//     let rightSum = nums.slice(1, len).reduce((pre, cur) => pre + cur)
//     if (leftSum === rightSum) return 0
//     for (let i = 1; i < len; i++) {
//         leftSum += nums[i - 1]
//         rightSum -= nums[i]
//         if (leftSum === rightSum) return i
//     }
//     return -1
// }

// 优化，只需维护一个变量更改
const pivotIndex = nums => {
    const total = nums.reduce((pre, cur) => pre + cur, 0)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (sum * 2 + nums[i] === total) return i
        sum += nums[i]
    }
    return -1
}

console.log(pivotIndex([]))
console.log(pivotIndex([1]))
console.log(pivotIndex([1, 7]))
console.log(pivotIndex([3, 7, 3]))
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 7, 3, 6, 5, 6, 1, 1, 8, 1]))
console.log(pivotIndex([-1, -1, -1, 0, 1, 1]))
console.log(pivotIndex([-3, 3, 1]))
console.log(pivotIndex([1, 2, 3]))