// 函数式风格写法
// const lengthOfLIS = nums => {
//     const list = nums.map(num => ({
//         num,
//         max: 1
//     }))
//     for (let i = 1; i < nums.length; i++) {
//         const tmp = list.filter((item, idx) => idx < i && item.num < nums[i])
//         if (tmp.length !== 0) list[i].max = Math.max(...tmp.map(item => item.max)) + 1
//     }
//     return Math.max(...list.map(item => item.max))
// }

// 虽然实现思想相同，但性能差距 3 倍多
const lengthOfLIS = nums => {
    const dp = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
    return Math.max(...dp)
}


console.log(lengthOfLIS([233]))
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3, 11, 13, 7]))
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
