// const isPowerOfTwo = n => {
//     let power = 0
//     while (true) {
//         if (2 ** power < n) {
//             power++
//         } else {
//             return 2 ** power === n
//         }
//     }
// }

// 判断是否为最大 2 的幂的约数, 在题目给定的 32 位有符号整数的范围内，最大的 2 的幂为 2^{30} = 10737418242
const isPowerOfTwo = n => n > 0 && 2 ** 30 % n === 0

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))


