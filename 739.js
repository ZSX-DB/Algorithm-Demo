// const dailyTemperatures = temperatures => {
//     const len = temperatures.length
//     const flags = new Array(len).fill(0)
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (temperatures[j] > temperatures[i]) {
//                 flags[i] = j - i
//                 break
//             }
//         }
//     }
//     return flags
// }

// 维护单调递减栈
const dailyTemperatures = temperatures => {
    const flags = new Array(temperatures.length).fill(0)
    const stack = []
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const pop = stack.pop()
            flags[pop] = i - pop
        }
        stack.push(i)
    }
    return flags
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
