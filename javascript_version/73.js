const setZeroes = matrix => {
    const m = matrix.length
    const n = matrix[0].length
    const list = []

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 0) list.push([row, col])
        }
    }

    list.forEach(([row, col]) => {
        for (let i = 0; i < m; i++) {
            matrix[i][col] = 0
        }
        for (let i = 0; i < n; i++) {
            matrix[row][i] = 0
        }
    })

    return matrix

}

// const setZeroes = matrix => {
//     const m = matrix.length
//     const n = matrix[0].length
//     const row = new Array(m).fill(false)
//     const col = new Array(n).fill(false)
//
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if(matrix[i][j]===0) row[i] = col[j] = true
//         }
//     }
//
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if(row[i] || col[j]) matrix[i][j] = 0
//         }
//     }
//
//     return matrix
//
// }

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
console.log(setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]))
