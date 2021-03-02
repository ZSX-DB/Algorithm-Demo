// class NumMatrix {
//     constructor(matrix) {
//         this.matrix = matrix
//         this.rowSum = matrix.length
//         this.colSum = matrix[0].length
//     }
//
//     sumRegion(row1, col1, row2, col2) {
//         let sum = 0
//         for (let r = 0; r < this.rowSum; r++) {
//             for (let c = 0; c < this.colSum; c++) {
//                 if (r >= row1 && r <= row2 && c >= col1 && c <= col2) sum += this.matrix[r][c]
//             }
//         }
//         return sum
//     }
//
// }

// 组合前缀和
class NumMatrix {
    constructor(matrix) {
        const m = matrix.length
        if (m > 0) {
            const n = matrix[0].length
            this.sum = new Array(m).fill(0).map(item => new Array(n + 1).fill(0))
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    this.sum[i][j + 1] = this.sum[i][j] + matrix[i][j]
                }
            }
        }
    }

    sumRegion(row1, col1, row2, col2) {
        let sum = 0
        for (let i = row1; i <= row2; i++) {
            sum += this.sum[i][col2 + 1] - this.sum[i][col1]
        }
        return sum
    }

}

const nm = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
console.log(nm.sumRegion(2, 1, 4, 3))
console.log(nm.sumRegion(1, 1, 2, 2))
console.log(nm.sumRegion(1, 2, 2, 4))
