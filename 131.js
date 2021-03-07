// 回溯
// const partition = s => {
//     const len = s.length
//     const res = []
//
//     // 双指针，判断是否是回文
//     const judge = (str, left, right) => {
//         while (left < right) {
//             if (str[left] !== str[right]) return false
//             left++
//             right--
//         }
//         return true
//     }
//
//     const dfs = (tmp, start) => {
//         if (start === len) {
//             res.push(tmp.slice())
//             return
//         }
//         for (let i = start; i < len; i++) {
//             if (judge(s, start, i)) {
//                 tmp.push(s.substring(start, i + 1))
//                 dfs(tmp, i + 1)
//                 tmp.pop()
//             }
//         }
//     }
//
//     dfs([], 0)
//     return res
// }

// 优化，加入记忆化搜索
const partition = s => {
    const len = s.length
    const used = {}
    const res = []

    const judge = (str, left, right) => {
        if (used[`${left}${right}`] !== undefined) return used[`${left}${right}`]
        while (left < right) {
            if (str[left] !== str[right]) {
                used[`${left}${right}`] = false
                return false
            }
            left++
            right--
        }
        used[`${left}${right}`] = true
        return true
    }

    const dfs = (tmp, start) => {
        if (start === len) {
            res.push(tmp.slice())
            return
        }
        for (let i = start; i < len; i++) {
            if (judge(s, start, i)) {
                tmp.push(s.substring(start, i + 1))
                dfs(tmp, i + 1)
                tmp.pop()
            }
        }
    }

    dfs([], 0)
    return res
}

console.log(partition('ababc'))
console.log(partition('aab'))
console.log(partition('abbac'))
