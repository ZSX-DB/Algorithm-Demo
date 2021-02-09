// 暴力法（注：统一添加到一个数组会栈溢出）
// const maxSubArray = nums => {
//     const maxSumList = []
//     for (let i = 0; i < nums.length; i++) {
//         const sumList = []
//         let sum = 0
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j]
//             sumList.push(sum)
//         }
//         maxSumList.push(Math.max(...sumList))
//     }
//     return Math.max(...maxSumList)
// }

// 动态规划
const maxSubArray = nums => {
    let pre = 0
    let max = nums[0]
    nums.forEach(num => {
        pre = Math.max(pre + num, num)
        max = Math.max(pre, max)
    })
    return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([0]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([-100000]))