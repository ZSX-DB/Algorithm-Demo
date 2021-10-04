// 递推
// const getRow = rowIndex => {
//     const generate = numRows => {
//         const list = []
//         for (let i = 0; i < numRows; i++) {
//             const row = new Array(i + 1).fill(1)
//             for (let j = 1; j < i; j++) {
//                 row[j] = list[i - 1][j - 1] + list[i - 1][j]
//             }
//             list.push(row)
//         }
//         return list
//     }
//
//     return generate(rowIndex + 1)[rowIndex]
//
// }

// 数组迭代
// const getRow = rowIndex => {
//     let pre = []
//     let cur = []
//     for (let i = 0; i <= rowIndex; i++) {
//         cur = new Array(i + 1).fill(1)
//         for (let j = 1; j < i; j++) {
//             cur[j] = pre[j - 1] + pre[j]
//         }
//         pre = cur
//     }
//     return pre
// }

// 数学递推
const getRow = rowIndex => {
    const list = new Array(rowIndex + 1).fill(0)
    list[0] = 1
    for (let i = 1; i <= rowIndex; i++) {
        list[i] = list[i - 1] * (rowIndex - i + 1) / i
    }
    return list
}

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(3))
console.log(getRow(33))
