// 超时
// const countPrimes = n => {
//     const isPrime = x => {
//         for (let i = 2; i ** 2 <= x; i++) {
//             if (x % i === 0) return false
//         }
//         return true
//     }
//     let count = 0
//     for (let i = 2; i < n; i++) {
//         count += isPrime(i)
//     }
//     return count
// }

// 优化，偶数不可能为质数，仍超时
// const countPrimes = n => {
//     const isPrime = x => {
//         for (let i = 2; i ** 2 <= x; i++) {
//             if (x % i === 0) return false
//         }
//         return true
//     }
//     if (n < 3) return 0
//     let count = 1
//     for (let i = 3; i < n; i += 2) {
//         count += isPrime(i)
//     }
//     return count
// }

// 优化，如果 x 为质数，那么 2x 3x 等都不为质数
const countPrimes = n => {
    const isPrime = Array(n).fill(1)
    if (n < 3) return 0
    let count = 1
    for (let i = 3; i < n; i += 2) {
        if (isPrime[i]) {
            count++
            for (let j = i; j < n; j += i) {
                isPrime[j] = 0
            }
        }
    }
    return count
}

console.log(countPrimes(0))
console.log(countPrimes(1))
console.log(countPrimes(2))
console.log(countPrimes(3))
console.log(countPrimes(10))
console.log(countPrimes(5000000))
