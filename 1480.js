// const runningSum = nums => {
//     const list = []
//     let sum = 0
//     for (const num of nums) {
//         sum += num
//         list.push(sum)
//     }
//     return list
// }

// const runningSum = nums => nums.reduce((prefix, num) => {
//     const last = prefix.length ? prefix[prefix.length - 1] : 0
//     prefix.push(last + num)
//     return prefix
// }, [])

// 原地修改
const runningSum = nums => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
}

console.log(runningSum([1, 2, 3, 4]))
