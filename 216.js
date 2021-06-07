// const combinationSum3 = (k, n) => {
//     const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const collect = []
//     const helper = (nums, sum, idx) => {
//         if (nums.length > k || idx > 9) return
//         if (nums.length === k) {
//             sum === n && collect.push(nums)
//             return
//         }
//         helper([...nums, numList[idx]], sum + numList[idx], idx + 1)
//         helper([...nums], sum, idx + 1)
//     }
//     helper([], 0, 0)
//     return collect
// }

const combinationSum3 = (k, n) => {
    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const collect = []
    const helper = (nums, idx) => {
        if (nums.length > k || idx > 9) return
        if (nums.length === k) {
            nums.reduce((sum, num) => sum + num, 0) === n && collect.push(nums)
            return
        }
        helper([...nums, numList[idx]], idx + 1)
        helper([...nums], idx + 1)
    }
    helper([], 0)
    return collect
}

console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))
console.log(combinationSum3(4, 1))
console.log(combinationSum3(9, 45))
console.log(combinationSum3(3, 15))
console.log(combinationSum3(4, 24))
