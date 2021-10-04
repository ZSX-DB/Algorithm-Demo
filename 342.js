// const isPowerOfFour = n => {
//     let power = 0
//     while (true) {
//         if (4 ** power < n) {
//             power++
//         } else {
//             return 4 ** power === n
//         }
//     }
// }

const isPowerOfFour = n => {
    let lower = 0
    let upper = n
    while (lower <= upper) {
        const mid = Math.floor((lower + upper) / 2)
        if (4 ** mid > n) {
            upper = mid - 1
        } else if (4 ** mid < n) {
            lower = mid + 1
        } else {
            return true
        }
    }
    return false
}

// const isPowerOfFour = n => n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0

// const isPowerOfFour = n => n > 0 && (n & (n - 1)) === 0 && n % 3 === 1

// const isPowerOfFour = n => [1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216, 67108864, 268435456, 1073741824, 4294967296].includes(n)

console.log(isPowerOfFour(1))
console.log(isPowerOfFour(0))
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(15))
console.log(isPowerOfFour(4))
console.log(isPowerOfFour(64))
console.log(isPowerOfFour(9))
console.log(isPowerOfFour(1024))
// console.log(32 * 32)
