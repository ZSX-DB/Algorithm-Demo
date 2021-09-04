const allPathsSourceTarget = graph => {
    const res = []
    const n = graph.length
    const notEmptyIdx = graph.findIndex(item => item.length !== 0)
    const helper = (curr, index) => {
        if (curr[curr.length - 1] === n - 1) {
            res.push(curr)
            return
        }
        const list = graph[index]
        if (list.length === 0) {
            return
        }
        for (let i = 0; i < list.length; i++) {
            helper([...curr, list[i]], list[i])
        }
    }
    helper([notEmptyIdx], notEmptyIdx)
    return res
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))
console.log(allPathsSourceTarget([[1, 3], [2], [3], []]))
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [], [4], []]))
console.log(allPathsSourceTarget([[2], [], [1]]))
