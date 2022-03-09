const exist = (board, word) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const m = board.length
    const n = board[0].length
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
    const traverse = (i, j, idx) => {
        if (board[i][j] !== word[idx]) {
            return false
        } else if (idx === word.length - 1) {
            return true
        }
        visited[i][j] = true
        let res = false
        for (const [x, y] of directions) {
            let tmpI = i + x
            let tmpJ = j + y
            if (tmpI >= 0 && tmpI < m && tmpJ >= 0 && tmpJ < n && visited[tmpI][tmpJ] === false && traverse(tmpI, tmpJ, idx + 1)) {
                res = true
                break
            }
        }
        visited[i][j] = false
        return res
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (traverse(i, j, 0)) return true
        }
    }
    return false
}

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED'))
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE'))
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCB'))
