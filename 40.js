// const combinationSum2 = (candidates, target) => {
//     candidates.sort((a, b) => a - b)
//     const ans = []
//     const backtracking = (target, combine, idx) => {
//         if (idx === candidates.length) return
//         backtracking(target, [...combine], idx + 1)
//         if (target - candidates[idx] > 0) {
//             backtracking(target - candidates[idx], [...combine, candidates[idx]], idx + 1)
//         } else if (target - candidates[idx] === 0) {
//             ans.push([...combine, candidates[idx]])
//         }
//     }
//     backtracking(target, [], 0)
//     return [...new Set(ans.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
// }

const combinationSum2 = (candidates, target) => {
    candidates.sort((a, b) => a - b)
    const ans = []
    const backtracking = (target, combine, idx) => {
        if (target === 0) {
            ans.push([...combine])
            return
        }
        for (let i = idx; i < candidates.length; i++) {
            if (target < candidates[i]) break
            if (i > idx && candidates[i] === candidates[i - 1]) continue
            backtracking(target - candidates[i], [...combine, candidates[i]], i + 1)
        }
    }
    backtracking(target, [], 0)
    return ans
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([1, 3, 5, 7, 9], 10))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
console.log(combinationSum2([3,3,3,3, 3], 12))