// 全排列，再去重，效率低
// const permuteUnique = nums => {
//     const len = nums.length
//     const vis = new Array(len).fill(false)
//     const list = []
//     const collect = (path = []) => {
//         if (path.length === len) {
//             list.push(JSON.parse(JSON.stringify(path)))
//             return
//         }
//         for (let i = 0; i < len; i++) {
//             if (vis[i]) continue
//             path.push(nums[i])
//             vis[i] = true
//             collect(path)
//             path.pop()
//             vis[i] = false
//         }
//     }
//     collect()
//     return [...new Set(list.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
// }

const permuteUnique = nums => {
    const len = nums.length
    const vis = new Array(len).fill(false)
    const list = []
    const collect = (path = []) => {
        if (path.length === len) {
            list.push(JSON.parse(JSON.stringify(path)))
            return
        }
        for (let i = 0; i < len; i++) {
            // 剪枝
            if (vis[i] || (i > 0 && nums[i - 1] === nums[i] && !vis[i - 1])) continue
            path.push(nums[i])
            vis[i] = true
            collect(path)
            path.pop()
            vis[i] = false
        }
    }
    nums.sort((x, y) => x - y)
    collect()
    return list
}


console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 2, 4]))
console.log(permuteUnique([3, 3, 0, 3]))
