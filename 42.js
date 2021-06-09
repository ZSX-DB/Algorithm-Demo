// 构建二维数组
// const trap = height => height.length ? new Array(Math.max(...height)).fill(0)
//     .map((_, rowIdx) => new Array(height.length).fill(0).map((_, colIdx) => height[colIdx] > rowIdx ? 1 : 0))
//     .map(row => {
//         const firstOneIdx = row.indexOf(1)
//         const lastOneIdx = row.lastIndexOf(1)
//         return row.filter((item, idx) => idx >= firstOneIdx && idx <= lastOneIdx && item !== 1).length
//     })
//     .reduce((pre, cur) => pre + cur, 0) : 0

// 按列求和
// const trap = height => {
//     const len = height.length
//     if (len === 0) return 0
//     let count = 0
//     for (let i = 1; i < len - 1; i++) {
//         let leftMax = height[i]
//         let rightMax = height[i]
//         for (let j = i - 1; j >= 0; j--) {
//             if (height[j] > leftMax) leftMax = height[j]
//         }
//         for (let j = i + 1; j < len; j++) {
//             if (height[j] > rightMax) rightMax = height[j]
//         }
//         count += Math.min(leftMax, rightMax) - height[i]
//     }
//     return count
// }

// 动态规划(按列求和多次重复计算 max)，maxLeft[i] 表示第 i 列左边最高的墙的高度，maxRight[i] 表示第 i 列右边最高的墙的高度
// const trap = height => {
//     const len = height.length
//     if (len === 0) return 0
//     const maxLeft = [height[0]]
//     const maxRight = new Array(len)
//     maxRight[len - 1] = height[len - 1]
//     for (let i = 1; i < len; i++) {
//         maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1])
//     }
//     for (let i = len - 2; i >= 0; i--) {
//         maxRight[i] = Math.max(height[i + 1], maxRight[i + 1])
//     }
//     let count = 0
//     for (let i = 1; i < len - 1; i++) {
//         const min = Math.min(maxLeft[i], maxRight[i])
//         if(min > height[i]){
//             count += min - height[i]
//         }
//     }
//     return count
// }

// 单调递变种
const trap = height => {
    if ([0, 1, 2].includes(height.length)) return 0
    const stack = []
    let count = 0
    height.forEach(h => {
        while (stack.length && h >= stack[0]) {
            count += stack[0] - stack.pop()
        }
        stack.push(h)
    })
    return count + trap(stack.reverse())
}

console.log(trap([3, 2, 4]))
console.log(trap([4, 2, 3]))
console.log(trap([]))
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([2, 1, 0, 3]))
