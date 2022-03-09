// 暴力法，会超时
// const searchMatrix = (matrix, target) => {
//     for(const row of matrix){
//         for(const col of row){
//             if(col === target) return true
//         }
//     }
//     return false
// }

// 二分查找
const searchMatrix = (matrix, target) => {
    const binarySearch = (nums, target) => {
        let low = 0
        let high = nums.length - 1
        while (low <= high) {
            const mid = Math.floor((low + high) / 2)
            if (nums[mid] > target) {
                high = mid - 1
            } else if (nums[mid] < target) {
                low = mid + 1
            } else {
                return true
            }
        }
        return false
    }
    for(const row of matrix){
        if(binarySearch(row, target) === true) return true
    }
    return false
}

// leetcode执行存在bug，同样代码typescript可通过
// const searchMatrix = (matrix, target) => {
//     let m = matrix.length
//     let n = matrix[0].length
//     if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false
//     if (target === matrix[0][0] || target === matrix[m - 1][n - 1]) return true
//     if (m === 1) return matrix[0].includes(target)
//     if (n === 1) return matrix.map(row => row[0]).includes(target)
//
//     let row = m
//     let col = 0
//
//     while (matrix.length) {
//         if (matrix[row - 1][col] > target) {
//             matrix.pop()
//             row--
//         } else if (matrix[row - 1][col] < target) {
//             col++
//             if (matrix[row - 1][col] === undefined) return false
//         } else if (matrix[row - 1][col] === target) {
//             return true
//         }
//     }
//
//     return false
// }

console.log(searchMatrix([[1, 4], [2, 5]], 3))
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20))
console.log(searchMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], 15))
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 38]], 32))
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5))
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20))
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 26))
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 30))
console.log(searchMatrix([[5], [6]], 6))
console.log(searchMatrix([[3], [5]], 4))
console.log(searchMatrix([[3], [5]], 2))
console.log(searchMatrix([[1, 4], [2, 5]], 2))
console.log(searchMatrix([[1, 4], [2, 5]], 3))
console.log(searchMatrix([[1, 4], [3, 5]], 2))
console.log(searchMatrix([[1, 4]], 2))
console.log(searchMatrix([[-1, 3]], 1))
console.log(searchMatrix([[1, 4]], -1))
console.log(searchMatrix([[4, 6, 9, 10, 14], [9, 12, 13, 15, 16]], 14))
