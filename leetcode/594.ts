// const findLHS = (nums: number[]): number => {
//     let max: number = 0
//     const record: Map<number, number> = new Map()
//     for (const num of nums) {
//         if (record.has(num)) {
//             record.set(num, record.get(num) + 1)
//         } else {
//             record.set(num, 1)
//         }
//     }
//     for (const item of record.keys()) {
//         if (record.has(item + 1)) {
//             max = Math.max(max, record.get(item) + record.get(item + 1))
//         }
//     }
//     return max
// }

const findLHS = (nums: number[]): number => {
    nums.sort((x, y) => x - y)
    let begin: number = 0
    let max: number = 0
    for (let end: number = 0; end < nums.length; end++) {
        if (nums[end] - nums[begin] > 1) {
            begin++
        }
        if (nums[end] - nums[begin] === 1) {
            max = Math.max(max, end - begin + 1)
        }
    }
    return max
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
console.log(findLHS([1, 2, 3, 4]))
console.log(findLHS([1, 1, 1, 1]))
console.log(findLHS([1, 2, 2, 1]))
