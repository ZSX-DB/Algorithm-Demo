// const trailingZeroes = n => {
//     const dp = [1n, 1n]
//     for (let i = 1; i <= n; i++) {
//         dp[i] = BigInt(i) * dp[i - 1]
//     }
//     const str = dp[n].toString()
//     let count = 0
//     for (let i = str.length - 1; i >= 0; i--) {
//         if(str[i] !== '0') break
//         count++
//     }
//     return count
// }

// 计算 5 的因子
// const trailingZeroes = n => {
//     let count = 0
//     while (n / 5 !== 0){
//         const tmp = Math.floor(n / 5)
//         count += tmp
//         n = tmp
//     }
//     return count
// }

const trailingZeroes = n => {
    let base = 1
    let count = 0
    while (5 ** base <= n) {
        base++
    }
    for (let i = 1; i < base; i++) {
        count += Math.floor(n / (5 ** i))
    }
    return count
}

console.log(trailingZeroes(7))
console.log(trailingZeroes(5))
console.log(trailingZeroes(10))
console.log(trailingZeroes(30))
console.log(trailingZeroes(31))
console.log(trailingZeroes(7302))
