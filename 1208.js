// const equalSubstring = (s, t, maxCost) => {
//     const sList = s.split('').map(item => item.charCodeAt(0))
//     const tList = t.split('').map(item => item.charCodeAt(0))
//     const len = s.length
//     let list = []
//     for (let i = 0; i < len; i++) {
//         list[i] = Math.abs(sList[i] - tList[i])
//     }
//     list.push(maxCost + 1)
//     const records = []
//     for (let i = 0; i < len + 1; i++) {
//         let sum = 0
//         for (let j = i; j < len + 1; j++) {
//             if (list[j] === 0) continue
//             sum += list[j]
//             if (sum > maxCost) {
//                 records.push(j - i)
//                 break
//             }
//         }
//     }
//     return Math.max(...records)
// }

// 滑动窗口
// const equalSubstring = (s, t, maxCost) => {
//     const len = s.length
//     let list = []
//     for (let i = 0; i < len; i++) {
//         list[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
//     }
//     let max = 0
//     let left = 0
//     let right = 0
//     let sum = 0
//     while (right < len) {
//         sum += list[right]
//         while (sum > maxCost) {
//             sum -= list[left]
//             left++
//         }
//         max = Math.max(max, right - left + 1)
//         right++
//     }
//     return max
// }

// 优化
const equalSubstring = (s, t, maxCost) => {
    let left = 0
    let right = 0
    let maxSum = 0
    for (let i = 0; i < s.length; i++) {
        maxSum += Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
        if (maxSum > maxCost) {
            maxSum -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
            left++
        }
        right++
    }
    return right - left
}


console.log(equalSubstring("ctlnkysaguywprybtfcrwfsfw", "tyhxrxiaerrwcxrbfqmrcxkek", 97))
console.log(equalSubstring("krpgjbjjznpzdfy", "nxargkbydxmsgby", 14))
console.log(equalSubstring('abcd', 'abcd', 500))
console.log(equalSubstring('abcd', 'bcdf', 3))
console.log(equalSubstring('abcd', 'cdef', 3))
console.log(equalSubstring('abcd', 'acde', 0))
console.log(equalSubstring('abcd', 'abce', 0))
console.log(equalSubstring('abc', 'dsg', 0))
console.log(equalSubstring("krrgw", "zjxss", 19))
console.log(equalSubstring("ujteygggjwxnfl", "nstsenrzttikoy", 43))
