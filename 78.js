// const subsets = nums => {
//     const collection = new Set()
//     nums = nums.map(num => String(num) + '|')
//     const dfs = (str, idx) => {
//         if (idx > nums.length) return
//         collection.add(str)
//         str += nums[idx]
//         dfs('', idx + 1)
//         for (let i = idx + 1; i <= nums.length; i++) {
//             dfs(str, i)
//         }
//     }
//     dfs('', 0)
//     return [...collection].map(item => {
//         item = item.split('|')
//         item.pop()
//         return item.map(Number)
//     })
// }

const subsets = nums => {
    const collection = []
    const dfs = (list, cur) => {
        if (cur === nums.length) {
            collection.push(list)
            return
        }
        dfs(list, cur + 1)
        dfs([...list, nums[cur]], cur + 1)
    }
    dfs([], 0)
    return collection
}

console.log(subsets([0]))
console.log(subsets([1, 2, 3]))
console.log(subsets([1, 2, 3, 4]))
