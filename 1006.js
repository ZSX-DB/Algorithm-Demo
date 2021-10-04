// const clumsy = N => {
//     if (N === 1) return 1
//     if (N === 2) return 2
//     const list = []
//     let sign = '*'
//     let tmp = N
//     let flag = false
//     for (let i = N - 1; i > 0; i--) {
//         switch (sign) {
//             case '*':
//                 if (i === 1) list.push(-tmp)
//                 tmp *= i
//                 sign = '/'
//                 break
//             case '/':
//                 if (flag) {
//                     list.push(-Math.floor(tmp / i))
//                 } else {
//                     list.push(Math.floor(tmp / i))
//                     flag = true
//                 }
//                 sign = '+'
//                 break
//             case '+':
//                 list.push(i)
//                 sign = '-'
//                 break
//             case '-':
//                 if (i === 1) list.push(-i)
//                 tmp = i
//                 sign = '*'
//                 break
//         }
//     }
//     return list.reduce((pre, cur) => pre + cur)
// }

// 数学方法
// const clumsy = N => {
//     if (N <= 2) return N
//     if (N === 3) return 6
//     if (N === 4) return 7
//     if (N % 4 === 0) return N + 1
//     if (N % 4 <= 2) return N + 2
//     return N - 1
// }

const clumsy = N => {
    if (N <= 2) return N
    if (N === 3) return 6
    let sum = Math.floor(N * (N - 1) / (N - 2)) + N - 3
    N -= 4
    while (N >= 4) {
        sum += (-(Math.floor(N * (N - 1) / (N - 2)) - N + 3))
        N -= 4
    }
    return sum - clumsy(N)
}

// console.log(clumsy(1))
// console.log(clumsy(2))
// 3 * 2 / 1
// console.log(clumsy(3))
// 4 * 3 / 2 + 1
// console.log(clumsy(4))
// 9 * 8 / 7 + 6 - 5 * 4 / 3 + 2 - 1
console.log(clumsy(9))
// 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
console.log(clumsy(10))
// 11 * 10 / 9 + 8 - 7 * 6 / 5 + 4 - 3 * 2 / 1
// console.log(clumsy(11))
// 12 * 11 / 10 + 9 - 8 * 7 / 6 + 5 - 4 * 3 / 2 + 1
// console.log(clumsy(12))
// 13 * 12 / 11 + 10 - 9 * 8 / 7 + 6 - 5 * 4 / 3 + 2 - 1
// console.log(clumsy(13))
