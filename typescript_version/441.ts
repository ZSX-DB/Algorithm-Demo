// const arrangeCoins = (n: number): number => {
//     let val = 0
//     let row = 1
//     while (true) {
//         val += row
//         if(val > n){
//             return row - 1
//         }
//         row++
//     }
// }

// 根据等差数列性质
// const arrangeCoins = (n: number): number => {
//     let base = 0
//     while (true) {
//         if (base * (base + 1) / 2 <= n) {
//             base++
//         } else {
//             return base - 1
//         }
//     }
// }

// 二分查找优化
const arrangeCoins = (n: number): number => {
    let low = 0
    let high = n
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const val = mid * (mid + 1) / 2
        if (val > n) {
            high = mid - 1
        } else if (val < n) {
            low = mid + 1
        } else {
            return mid
        }
    }
    return low - 1
}

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(10))
console.log(arrangeCoins(1681692777))
