// const maxArea = (height: number[]): number => {
//     const length = height.length
//     let result: number = 0
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             const minHeight: number = Math.min(height[i], height[j])
//             result = Math.max(result, minHeight * (j - i))
//         }
//     }
//     return result
// }

const maxArea = (height: number[]): number => {
    let left: number = 0
    let right: number = height.length - 1
    let result: number = 0
    while (left < right) {
        if (height[left] < height[right]) {
            result = Math.max(result, height[left] * (right - left))
            left++
        } else {
            result = Math.max(result, height[right] * (right - left))
            right--
        }
    }
    return result
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
