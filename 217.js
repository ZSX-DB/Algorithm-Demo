// const containsDuplicate = nums => {
//     const record = new Map()
//     for (const num of nums) {
//         if (record.has(num)) return true
//         record.set(num, true)
//     }
//     return false
// }

const containsDuplicate = nums => nums.length !== nums.reduce((pre, cur) => pre.add(cur), new Set()).size


console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
