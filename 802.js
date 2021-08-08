// const eventualSafeNodes = graph => {
//     const len = graph.length
//     const color = Array(graph.length).fill(0)
//     const res = []
//     const isSafe = i => {
//         if (color[i] > 0) {
//             return color[i] === 2
//         }
//         color[i] = 1
//         for (const idx of graph[i]) {
//             if (isSafe(idx) === false) {
//                 return false
//             }
//         }
//         color[i] = 2
//         return true
//     }
//     for (let i = 0; i < len; i++) {
//         if (isSafe(i)) {
//             res.push(i)
//         }
//     }
//     return res
// }

// 拓扑排序
const eventualSafeNodes = graph => {
    const len = graph.length
    const inDeg = []
    const rg = Array(len).fill(0).map(_ => [])
    const getZeroIndex = nums => nums
        .map((num, index) => num === 0 ? index : null)
        .filter(num => num !== null)
    for (let x = 0; x < len; x++) {
        for (const y of graph[x]) {
            rg[y].push(x)
        }
        inDeg.push(graph[x].length)
    }
    const queue = getZeroIndex(inDeg)
    while (queue.length) {
        const x = queue.shift()
        for (const y of rg[x]) {
            inDeg[y]--
            if (inDeg[y] === 0) {
                queue.push(y)
            }
        }
    }
    return getZeroIndex(inDeg)
}

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]))
