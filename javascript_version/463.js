// const islandPerimeter = grid => {
//     const judge = (i, j) => grid[i] === undefined ? 1 : (grid[i][j] === 1 ? 0 : 1)
//     const rowLen = grid.length
//     const colLen = grid[0].length
//     let perimeter = 0
//     for (let i = 0; i < rowLen; i++) {
//         for (let j = 0; j < colLen; j++) {
//             if (grid[i][j] === 1) {
//                 perimeter += (judge(i - 1, j) + judge(i + 1, j) + judge(i, j - 1) + judge(i, j + 1))
//             }
//         }
//     }
//     return perimeter
// }

const islandPerimeter = grid => {
    let perimeter = 0
    const rowLen = grid.length
    const colLen = grid[0].length
    const dfs = (i, j) => {
        // 遇到边界的情况
        if (i < 0 || i >= rowLen || j < 0 || j >= colLen) {
            return 1
        } else if (grid[i][j] === 0) {
            return 1
        } else if (grid[i][j] === 2) {
            return 0
        } else {
            grid[i][j] = 2
            return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
        }
    }
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === 1) {
                perimeter += dfs(i, j)
            }
        }
    }
    return perimeter
}

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]))
console.log(islandPerimeter([[1]]))
console.log(islandPerimeter([[1, 0]]))
