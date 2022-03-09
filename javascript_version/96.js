const numTrees = n => {
    const dp = [1]
    const fn = (i, n) => dp[i - 1] * dp[n - i]
    for (let i = 1; i <= n; i++) {
        dp[i] = new Array(i).fill(0).map((_, idx) => idx + 1).reduce((pre, cur) => pre + fn(cur, i), 0)
    }
    return dp[n]
}

console.log(numTrees(1))
console.log(numTrees(3))
console.log(numTrees(4))
console.log(numTrees(5))
