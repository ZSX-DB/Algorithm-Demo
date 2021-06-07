// const combinationSum2 = (candidates, target) => {
//     candidates.sort((a, b) => a - b)
//     const ans = []
//     const backtracking = (target, combine, idx) => {
//         if (target === 0) {
//             ans.push([...combine])
//             return
//         }
//         for (let i = idx; i < candidates.length; i++) {
//             if (target < candidates[i]) break
//             if (i > idx && candidates[i] === candidates[i - 1]) continue
//             backtracking(target - candidates[i], [...combine, candidates[i]], i + 1)
//         }
//     }
//     backtracking(target, [], 0)
//     return ans
// }

const combinationSum2 = (candidates, target) => {
    candidates.sort((x, y) => x - y)
    const collect = new Set()
    const helper = (nums, sum, idx) => {
        if (sum > target || idx > candidates.length) return
        if (sum === target) {
            collect.add(JSON.stringify(nums))
            return
        }
        helper([...nums, candidates[idx]], sum + candidates[idx], idx + 1)
        helper([...nums], sum, idx + 1)
    }
    helper([], 0, 0)
    return [...collect].map(JSON.parse)
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([1, 3, 5, 7, 9], 10))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
console.log(combinationSum2([3, 3, 3, 3, 3], 12))
