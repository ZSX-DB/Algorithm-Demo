// const grayCode = n => {
//     const result = [0]
//     const len = 2 ** n
//     for (let i = 1; i < len; i++) {
//         result[i] = i ^ Math.floor(i / 2)
//     }
//     return result
// }

const grayCode = n => Array(2 ** n).fill(0).map((_, index) => index ^ Math.floor(index / 2))

console.log(grayCode(0))
console.log(grayCode(1))
console.log(grayCode(2))
// console.log(grayCode(3))
// console.log(grayCode(4))
// console.log(grayCode(5))
