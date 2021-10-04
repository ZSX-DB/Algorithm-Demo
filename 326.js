// const isPowerOfThree = n => {
//     if (n <= 0) return false
//     if (n < 1) n = 1 / n
//     let left = 0
//     let right = n
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2)
//         if (3 ** mid > n) {
//             right = mid - 1
//         } else if (3 ** mid < n) {
//             left = mid + 1
//         } else {
//             return true
//         }
//     }
//     return false
// }

const isPowerOfThree = n => {
    if (n <= 0) return false
    if (n < 1) n = 1 / n
    while (n % 3 === 0) {
        n /= 3
    }
    return n === 1
}

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(1))
console.log(isPowerOfThree(1 / 2))
console.log(isPowerOfThree(1 / 3))
console.log(isPowerOfThree(1 / 9))
console.log(isPowerOfThree(45))
