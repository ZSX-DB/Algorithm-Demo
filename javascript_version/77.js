const combine = (n, k) => {
    const collection = []
    const dfs = (list, cur) => {
        if (list.length + (n - cur + 1) < k) return
        if (list.length < k) {
            dfs([...list], cur + 1)
            dfs([...list, cur], cur + 1)
        } else {
            collection.push(list)
        }
    }
    dfs([], 1)
    return collection
}

console.log(combine(4, 2))
console.log(combine(5, 3))
console.log(combine(20, 16))
