// const tribonacci = n => {
//     let f = 0, s = 1, t = 1
//     if (n === 0) return f
//     if (n === 1) return s
//     if (n === 2) return t
//     let val = 0
//     for (let i = 2; i < n; i++) {
//         val = f + s + t
//         f = s
//         s = t
//         t = val
//     }
//     return val
// }

const tribonacci = n => {
    const list = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        list[i] = list[i - 1] + list[i - 2] + list[i - 3]
    }
    return list[n]
}

console.log(tribonacci(3))
console.log(tribonacci(4))
console.log(tribonacci(25))