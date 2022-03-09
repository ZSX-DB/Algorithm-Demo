// 暴力，超时
// const largestRectangleArea = heights => {
//     let max = Math.max(...heights)
//     for (let i = 0; i < heights.length; i++) {
//         let left = i
//         let right = i
//         while (heights[left] >= heights[i]) {
//             left--
//         }
//         while (heights[right] >= heights[i]) {
//             right++
//         }
//         const leftWidth = i - left > 1 ? i - left : 0
//         const rightWidth = right - i > 1 ? right - i : 0
//         if (leftWidth === 0 && rightWidth === 0) {
//             continue
//         } else if (leftWidth === 0 && rightWidth !== 0) {
//             max = Math.max(max, rightWidth * heights[i])
//         } else if (leftWidth !== 0 && rightWidth === 0) {
//             max = Math.max(max, leftWidth * heights[i])
//         } else {
//             max = Math.max(max, (leftWidth + rightWidth - 1) * heights[i])
//         }
//     }
//     return max
// }

// 单调栈
const largestRectangleArea = heights => {
    heights.push(0)
    const stack = []
    const getLastStackVal = () => stack[stack.length - 1]
    let max = 0
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[getLastStackVal()]) {
            const cur = stack.pop()
            const left = stack.length ? cur - getLastStackVal() - 1 : cur
            const right = i - cur - 1
            const width = left + right + 1
            const height = heights[cur]
            max = Math.max(max, width * height)
        }
        stack.push(i)
    }
    return max
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([2, 1, 5, 6, 99, 100]))
console.log(largestRectangleArea([100, 99, 2, 1, 5, 6]))
console.log(largestRectangleArea([2, 1, 2]))
console.log(largestRectangleArea([4, 5, 6, 3]))
