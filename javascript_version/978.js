// 滑动窗口
// const maxTurbulenceSize = arr => {
//     const isOdd = num => num % 2 === 1
//     const isEven = num => num % 2 === 0
//     // 奇数索引大于偶数
//     let oddCount = 1
//     // 偶数索引大于奇数
//     let evenCount = 1
//     let max = 1
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (isEven(i) && arr[i] < arr[i + 1]) {
//             oddCount++
//         } else if (isOdd(i) && arr[i] > arr[i + 1]) {
//             oddCount++
//         } else {
//             oddCount = 1
//         }
//
//         if (isEven(i) && arr[i] > arr[i + 1]) {
//             evenCount++
//         } else if (isOdd(i) && arr[i] < arr[i + 1]) {
//             evenCount++
//         } else {
//             evenCount = 1
//         }
//         max = Math.max(evenCount, oddCount, max)
//     }
//     return max
// }

// 动态规划

// 只有↗ ↘ ↗ ↘ ↗等的长度会被记录
const maxTurbulenceSize = arr => {
    let up = 1
    let down = 1
    let max = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            // 上升
            up = down + 1
            down = 1
        } else if (arr[i] < arr[i - 1]) {
            // 下降
            down = up + 1
            up = 1
        } else {
            up = down = 1
        }
        // console.log(`up: ${up}---down: ${down}`)
        max = Math.max(up, down, max)
    }
    return max
}


console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]))
console.log(maxTurbulenceSize([4, 8, 12, 16]))
console.log(maxTurbulenceSize([100]))
console.log(maxTurbulenceSize([100, 200]))
console.log(maxTurbulenceSize([200, 100]))
console.log(maxTurbulenceSize([100, 200, 150]))
console.log(maxTurbulenceSize([100, 200, 300]))