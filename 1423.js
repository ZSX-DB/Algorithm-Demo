// 单滑动窗口
// const maxScore = (cardPoints, k) => {
//     const left = cardPoints.slice(0, k).reverse()
//     const right = cardPoints.slice(cardPoints.length - k, cardPoints.length).reverse()
//     const list = [...left, ...right]
//     let sum = left.reduce((pre, cur) => pre + cur)
//     let max = sum
//     for (let i = 0; i < k; i++) {
//         sum = sum - list[i] + list[i + k]
//         max = Math.max(sum, max)
//     }
//     return max
// }


// 双滑动窗口
const maxScore = (cardPoints, k) => {
    const len = cardPoints.length
    let left = 0
    let right = cardPoints.slice(cardPoints.length - k, cardPoints.length).reduce((pre, cur) => pre + cur)
    let max = left + right
    for (let i = 0; i < k; i++) {
        left += cardPoints[i]
        right -= cardPoints[len - k + i]
        max = Math.max(max, left + right)
    }
    return max
}


console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3))
console.log(maxScore([2, 2], 2))
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7))
console.log(maxScore([1, 1000, 1], 1))
console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3))
console.log(maxScore([55, 22, 23], 3))