// 超时
// const countPairs = deliciousness => {
//     const flags = new Map()
//     for (const deliciousnes of deliciousness) {
//         if (flags.has(deliciousnes)) {
//             flags.set(deliciousnes, flags.get(deliciousnes) + 1)
//         } else {
//             flags.set(deliciousnes, 1)
//         }
//     }
//     const keys = [...flags.keys()]
//     const len = keys.length
//     const maxSum = Math.max(...keys) * 2
//     const cache = new Map()
//     let power = 0.5
//     let count = 0
//     while (power < maxSum) {
//         power *= 2
//         cache.set(power, true)
//     }
//     for (let i = 0; i < len; i++) {
//         for (let j = i; j < len; j++) {
//             const sum = keys[i] + keys[j]
//             if (cache.has(sum) === false) continue
//             if (keys[i] === keys[j]) {
//                 count += flags.get(keys[i]) * (flags.get(keys[j]) - 1) / 2
//             } else {
//                 count += flags.get(keys[i]) * flags.get(keys[j])
//             }
//         }
//     }
//     return count
// }

const countPairs = deliciousness => {
    const mod = 1000000007
    const maxSum = Math.max(...deliciousness) * 2
    const collect = new Map()
    let pairs = 0
    for (let i = 0; i < deliciousness.length; i++) {
        const num = deliciousness[i]
        for (let sum = 1; sum <= maxSum; sum *= 2) {
            const count = collect.get(sum - num) || 0
            pairs = (pairs + count) % mod
        }
        collect.set(num, (collect.get(num) || 0) + 1)
    }
    return pairs
}

console.log(countPairs([1, 3]))
console.log(countPairs([63, 63, 63, 63]))
console.log(countPairs([3, 3, 3, 5, 5, 5, 5]))
console.log(countPairs([1, 3, 5, 7, 9]))
console.log(countPairs([1, 1, 1, 3, 3, 3, 7]))
console.log(countPairs([2160, 1936, 3, 29, 27, 5, 2503, 1593, 2, 0, 16, 0, 3860, 28908, 6, 2, 15, 49, 6246, 1946, 23, 105, 7996, 196, 0, 2, 55, 457, 5, 3, 924, 7268, 16, 48, 4, 0, 12, 116, 2628, 1468]))
console.log(countPairs([64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64]))
