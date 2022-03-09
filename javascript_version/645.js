// const findErrorNums = nums => {
//     const result = []
//     nums = [...Array(nums.length).fill(0).map((_, idx) => idx + 1), ...nums].sort((x, y) => x - y)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1] && nums[i] === nums[i + 1]) {
//             result.unshift(nums[i])
//         } else if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
//             result.push(nums[i])
//         }
//     }
//     return result
// }

const findErrorNums = nums => {
    let rightSum = 0
    let errorSum = 0
    let more = 0
    const collect = new Map()
    nums.forEach((num, i) => {
        rightSum += (i + 1)
        errorSum += num
        collect.has(num) ? more = num : collect.set(num, true)
    })
    return [more, rightSum - errorSum + more]
}

console.log(findErrorNums([1, 2, 2, 4]))
