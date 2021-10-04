const isUgly = n => {
    if (n <= 0) return false
    const isInt = n => n === Math.floor(n)
    while (isInt(n / 2)) {
        n /= 2
    }
    while (isInt(n / 5)) {
        n /= 5
    }
    while (isInt(n / 3)) {
        n /= 3
    }
    return n === 1
}


// const isUgly = n => {
//     if (n <= 0) return false
//     const isInt = n => n === Math.floor(n)
//     const factors = [2, 3, 5]
//     for (const factor of factors) {
//         while (isInt(n / factor)) {
//             n /= factor
//         }
//     }
//     return n === 1
// }

console.log(isUgly(0))
console.log(isUgly(6))
console.log(isUgly(8))
console.log(isUgly(14))
console.log(isUgly(1))
