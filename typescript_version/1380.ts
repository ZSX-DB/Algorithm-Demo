const luckyNumbers = (matrix: number[][]): number[] => {
    const minRowNums: number[] = matrix.map(nums => Math.min(...nums))
    const maxColNums: number[] = matrix[0].map((_, index) => Math.max(...matrix.map(nums => nums[index])))
    const result: number[] = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === minRowNums[i] && matrix[i][j] === maxColNums[j]) {
                result.push(matrix[i][j])
            }
        }
    }
    return result
}

// const luckyNumbers = (matrix: number[][]): number[] => {
//     const minRowNums: number[] = matrix.map(nums => Math.min(...nums))
//     const maxColNums: number[] = matrix[0].map((_, index) => Math.max(...matrix.map(nums => nums[index])))
//     return minRowNums.filter(num => maxColNums.includes(num))
// }
