const uniquePathsWithObstacles = obstacleGrid => {
    const rowCount = obstacleGrid.length
    const colCount = obstacleGrid[0].length
    const dp = new Array(rowCount).fill(0).map(_ => new Array(colCount).fill(0))
    for (let i = 0; i < rowCount; i++) {
        if (obstacleGrid[i][0] === 1) break
        dp[i][0] = 1
    }
    for (let i = 0; i < colCount; i++) {
        if (obstacleGrid[0][i] === 1) break
        dp[0][i] = 1
    }
    for (let i = 1; i < rowCount; i++) {
        for (let j = 1; j < colCount; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : (dp[i - 1][j] + dp[i][j - 1])
        }
    }
    return dp[rowCount - 1][colCount - 1]
}

console.table(uniquePathsWithObstacles([[0, 1, 0], [0, 1, 0], [0, 0, 0]]))
console.table(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
console.table(uniquePathsWithObstacles([[0, 1], [0, 0]]))
console.table(uniquePathsWithObstacles([[0, 1, 1, 1], [0, 1, 1, 1], [0, 0, 0, 0], [1, 1, 1, 0]]))
