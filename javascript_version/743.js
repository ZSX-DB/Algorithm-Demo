const networkDelayTime = (times, n, k) => {
    const INF = Number.MAX_SAFE_INTEGER
    const g = Array(n).fill(0).map(_ => Array(n).fill(INF))
    for (const [start, end, time] of times) {
        g[start - 1][end - 1] = time
    }
    const dist = Array(n).fill(INF)
    dist[k - 1] = 0
    const used = Array(n).fill(false)
    for (let i = 0; i < n; i++) {
        let x = -1
        for (let y = 0; y < n; y++) {
            if (!used[y] && (x === -1 || dist[y] < dist[x])) {
                x = y
            }
        }
        used[x] = true
        for (let y = 0; y < n; ++y) {
            dist[y] = Math.min(dist[y], dist[x] + g[x][y])
        }
    }
    const ans = Math.max(...dist)
    return ans === INF ? -1 : ans
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))
console.log(networkDelayTime([[1, 2, 1]], 2, 1))
console.log(networkDelayTime([[1, 2, 1]], 2, 2))
