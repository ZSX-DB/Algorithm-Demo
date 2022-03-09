// 先统计肯定可以获得的，再通过滑动窗口取最大的不能获得的数
// const maxSatisfied = (customers, grumpy, X) => {
//     const len = customers.length
//     let sum = 0
//
//     for (let i = 0; i < len; i++) {
//         if (grumpy[i] === 0) sum += customers[i]
//     }
//
//     let count = 0
//     for (let i = 0; i < X; i++) {
//         if (grumpy[i]) count += customers[i]
//     }
//
//     let start = 0
//     let max = count
//
//     for (let i = X; i < len; i++) {
//         if (grumpy[i]) count += customers[i]
//         if (grumpy[start]) count -= customers[start]
//         start++
//
//         max = Math.max(count, max)
//     }
//
//     return max + sum
// }

const maxSatisfied = (customers, grumpy, X) => {
    const len = customers.length
    let sum = 0

    for (let i = 0; i < len; i++) {
        if (grumpy[i] === 0) sum += customers[i]
    }

    let count = 0
    for (let i = 0; i < X; i++) {
        count += customers[i] * grumpy[i]
    }

    let max = count
    for (let i = X; i < len; i++) {
        count = count + customers[i] * grumpy[i] - customers[i - X] * grumpy[i - X]
        max = Math.max(count, max)
    }

    return max + sum
}

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))