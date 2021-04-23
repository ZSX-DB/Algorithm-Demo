const minimumTotal = triangle => {
    const dp = [[triangle[0][0]]]
    for (let i = 1; i < triangle.length; i++) {
        const len = triangle[i].length
        dp[i] = []
        for (let j = 0; j < len; j++) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            } else if (j === len - 1) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
            }
        }
    }
    return Math.min(...dp[triangle.length - 1])
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-10]]))


