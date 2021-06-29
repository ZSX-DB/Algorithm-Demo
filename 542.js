const updateMatrix = mat => {
    const rowLen = mat.length
    const colLen = mat[0].length
    const createDP = () => {
        const dp = []
        for (let i = 0; i < rowLen; i++) {
            dp[i] = mat[i].map(_ => _ ? Infinity : 0)
        }
        return dp
    }
    const dp = createDP()
    const handle = (ri, ci) => (dp[ri] === undefined || dp[ri][ci] === undefined) ? Infinity : dp[ri][ci] + 1
    const traverse = () => {
        for (let i = 0; i < rowLen; i++) {
            for (let j = 0; j < colLen; j++) {
                if (dp[i][j] === 0) continue
                const left = handle(i, j - 1)
                const right = handle(i, j + 1)
                const top = handle(i - 1, j)
                const bottom = handle(i + 1, j)
                dp[i][j] = Math.min(left, right, top, bottom, dp[i][j])
            }
        }
    }
    let lastStr = ''
    while (true) {
        traverse()
        const curStr = JSON.stringify(dp)
        if (lastStr === curStr) break
        lastStr = curStr
    }
    return dp
}


const mat1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
const mat2 = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
const mat3 = [
    [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 1]]
console.log(updateMatrix(mat1))
console.log(updateMatrix(mat2))
// console.log(updateMatrix(mat3))
