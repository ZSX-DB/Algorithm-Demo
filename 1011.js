const shipWithinDays = (weights, D) => {
    let left = Math.max(...weights)
    let right = weights.reduce((pre, cur) => pre + cur, 0)
    const getSurplus = mid => {
        let copyD = D - 1
        let copyMid = mid
        for (let i = 0; i < weights.length; i++) {
            if (copyMid - weights[i] >= 0) {
                copyMid -= weights[i]
            } else {
                i--
                copyD--
                copyMid = mid
            }
        }
        return copyD
    }
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        const copyD = getSurplus(mid)
        copyD >= 0 ? right = mid : left = mid + 1
    }
    return left
}


// const shipWithinDays = (weights, D) => {
//     let left = Math.max(...weights)
//     let right = weights.reduce((pre, cur) => pre + cur, 0)
//     while (left < right) {
//         const mid = Math.floor((left + right) / 2)
//         let need = 1
//         let cur = 0
//         for (const weight of weights) {
//             if (cur + weight > mid) {
//                 need++
//                 cur = 0
//             }
//             cur += weight
//         }
//         need <= D ? right = mid : left = mid + 1
//     }
//     return left
// }

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
