// 使用除法, 不符合题意, 需要注意 0 的处理
// const productExceptSelf = nums => {
//     const zeroCount = nums.reduce((pre, cur) => cur === 0 ? pre + 1 : pre, 0)
//     if (zeroCount === 0) {
//         const product = nums.reduce((pre, cur) => pre * cur, 1)
//         return nums.map(num => product / num)
//     } else if (zeroCount === 1) {
//         const res = new Array(nums.length).fill(0)
//         res[nums.indexOf(0)] = nums.reduce((pre, cur) => cur !== 0 ? pre * cur : pre, 1)
//         return res
//     } else {
//         return new Array(nums.length).fill(0)
//     }
// }

// 性能差
// const productExceptSelf = nums => nums.map((_, idx) => nums.reduce((pre, cur, i) => i !== idx ? pre * cur : pre, 1))

// 左右乘积相乘
const productExceptSelf = nums => {
    const left = [1]
    const right = [1]
    const len = nums.length
    const reverseNums = [...nums].reverse()
    for (let i = 1; i < len; i++) {
        left[i] = left[i - 1] * nums[i - 1]
        right[i] = right[i - 1] * reverseNums[i - 1]
    }
    return nums.map((_, idx) => left[idx] * right[len - idx - 1])
}

console.log(productExceptSelf([4, 5, 1, 8, 2]))
// console.log(productExceptSelf([1, 2, 3, 4]))
// console.log(productExceptSelf([-1, 1, 0, -3, 3]))
