const findRedundantConnection = edges => {
    let lastLen = edges
    let record = new Map()
    const handle = () => {
        edges.forEach(cur => {
            record.set(cur[0], (record.get(cur[0]) || 0) + 1)
            record.set(cur[1], (record.get(cur[1]) || 0) + 1)
        })
        edges = edges.filter(cur => !(record.get(cur[0]) === 1 || record.get(cur[1]) === 1))
        if (lastLen === edges.length) {
            return true
        } else {
            lastLen = edges.length
            record = new Map()
            return false
        }
    }
    while (true) {
        const res = handle()
        if (res) return edges[lastLen - 1]
    }
}


console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))
console.log(findRedundantConnection([[1, 3], [3, 4], [1, 5], [3, 5], [2, 3]]))
console.log(findRedundantConnection([[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]))
