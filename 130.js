const solve = board => {
    const rowLen = board.length
    const colLen = board[0].length
    const dfs = (i, j) => {
        if (i < 0 || i >= rowLen || j < 0 || j >= colLen) return
        if (board[i][j] === 'X' || board[i][j] === 'V') return
        board[i][j] = 'V'
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    for (let i = 0; i < colLen; i++) {
        if (board[0][i] === 'O') dfs(0, i)
        if (board[rowLen - 1][i] === 'O') dfs(rowLen - 1, i)
    }
    for (let i = 1; i < rowLen - 1; i++) {
        if (board[i][0] === 'O') dfs(i, 0)
        if (board[i][colLen - 1] === 'O') dfs(i, colLen - 1)
    }
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X'
            if (board[i][j] === 'V') board[i][j] = 'O'
        }
    }
    return board
}

console.log(solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
]))
