// 双重循环超时
// const findMaxLength = nums => {
//     let sums = [0]
//     let max = 0
//     for (let i = 1; i <= nums.length; i++) {
//         sums[i] = sums[i - 1] + nums[i - 1]
//     }
// for (let i = 0; i < sums.length; i++) {
//     for (let j = i + 1; j < sums.length; j++) {
//         if (Math.abs(sums[j] - sums[i]) / (j - i) === 0.5) max = Math.max(max, j - i)
//     }
// }
//     return max
// }

const findMaxLength = nums => {
    nums = nums.map(num => num === 0 ? -1 : num)
    const records = new Map([[0, 0]])
    let sums = [0]
    let max = 0
    for (let i = 1; i <= nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i - 1]
        if (records.has(sums[i])) {
            max = Math.max(max, i - records.get(sums[i]))
        } else {
            records.set(sums[i], i)
        }
    }
    return max
}

console.log(findMaxLength([0]))
console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0]))
console.log(findMaxLength([0, 1, 1, 0, 0, 1, 1]))
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]))
