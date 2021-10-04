// const func = grid => {
//     const list = []
//     for(let i=0;i<grid.length;i++){
//         const row = grid[i]
//         for(let j=0;j<row.length;j++){
//             if(row[j] === 1){
//                 // list.push({
//                 //     area: 1,
//                 //     coords: [i, j]
//                 // })
//                 list.push([i, j])
//             }
//         }
//     }
//     return list
// }

const maxAreaOfIsland = grid => {

    const dfs = (i, j, grid) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return 0
        grid[i][j] = 0
        let sum = 1
        sum += dfs(i - 1, j, grid)
        sum += dfs(i + 1, j, grid)
        sum += dfs(i, j - 1, grid)
        sum += dfs(i, j + 1, grid)
        return sum
    }

    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            res = Math.max(res, dfs(i, j, grid))
        }
    }

    return res
}

console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]))