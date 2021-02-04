const permute = (nums) => {
    const res = []
    const used = []
    const dfs = (path = []) => {
        if (path.length === nums.length) {
            res.push(JSON.parse(JSON.stringify(path)))
            return
        }
        for (const num of nums) {
            if (used[num]) continue
            path.push(num)
            used[num] = true
            dfs(path)
            path.pop()
            used[num] = false
        }
    }
    dfs()
    return res
}

console.log(permute([1, 2, 3]))
