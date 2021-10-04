// const sumOddLengthSubarrays = arr => {
//     const len = arr.length
//     const sliceList = Array(len)
//         .fill(0)
//         .map((_, idx) => idx + 1)
//         .filter(x => x % 2 === 1)
//     const prefixList = arr.reduce((prefix, item) => {
//         const last = prefix.length ? prefix[prefix.length - 1] : 0
//         prefix.push(last + item)
//         return prefix
//     }, [0])
//     let sum = 0
//     for (const sliceItem of sliceList) {
//         for (let i = 0; i < len; i++) {
//             if (i + sliceItem > len) {
//                 break
//             }
//             sum += (prefixList[i + sliceItem] - prefixList[i])
//         }
//     }
//     return sum
// }

// 如果在前面选择了偶数个数字，那么在后面，也必须选择偶数个数字，这样加上它自身，才构成奇数长度的数组
// 如果在前面选择了奇数个数字，那么在后面，也必须选择奇数个数字，这样加上它自身，才构成奇数长度的数组
const sumOddLengthSubarrays = arr => arr.reduce((sum, num, index) => {
    const left = index + 1
    const right = arr.length - index
    const leftEven = Math.ceil(left / 2)
    const rightEven = Math.ceil(right / 2)
    const leftOdd = Math.floor(left / 2)
    const rightOdd = Math.floor(right / 2)
    return sum + (leftEven * rightEven + leftOdd * rightOdd) * num
}, 0)

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))
console.log(sumOddLengthSubarrays([1, 2]))
console.log(sumOddLengthSubarrays([10, 11, 12]))
console.log(sumOddLengthSubarrays([10]))
