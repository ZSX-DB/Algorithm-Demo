// const judgeSquareSum = c => {
//     for (let i = 0; i ** 2 <= c; i++) {
//         const num = Math.sqrt(c - i ** 2)
//         if (num === Math.floor(num)) return true
//     }
//     return false
// }

const judgeSquareSum = c => {
    let a = 0
    let b = Math.ceil(Math.sqrt(c))
    while (a <= b) {
        const sum = a ** 2 + b ** 2
        if (sum > c) {
            b--
        } else if (sum < c) {
            a++
        } else {
            return true
        }
    }
    return false
}

console.log(judgeSquareSum(2))
console.log(judgeSquareSum(50))
console.log(judgeSquareSum(0))
console.log(judgeSquareSum(100))
