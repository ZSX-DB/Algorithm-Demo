const unhappyFriends = (n, preferences, pairs) => {
    const match = Array(n).fill(0)
    const order = match.map(() => Array(n).fill(0))
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            order[i][preferences[i][j]] = j
        }
    }
    for (const pair of pairs) {
        match[pair[0]] = pair[1]
        match[pair[1]] = pair[0]
    }
    for (let x = 0; x < n; x++) {
        const y = match[x]
        for (const u of preferences[x]) {
            if (u === y) break
            const v = match[u]
            if (order[u][x] < order[u][v]) {
                count++
                break
            }
        }
    }
    return count
}

console.log(unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]]))
