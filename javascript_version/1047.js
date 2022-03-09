// const removeDuplicates = S => {
//     const match = str => {
//         const len = str.length
//         if (len === 1) return false
//         if (len === 2) return str[0] === str[1]
//         for (let i = 0; i < len; i++) {
//             if (str[i] === str[i + 1]) return true
//         }
//         return false
//     }
//
//     while (match(S)) {
//         for (let i = 0; i < S.length; i++) {
//             if (S[i] === S[i + 1]) {
//                 S = S.slice(0, i) + S.slice(i + 2, S.length)
//                 i--
//             }
//         }
//     }
//     return S
//
// }

// 栈
// const removeDuplicates = S => {
//     let str = S[0]
//     for (let i = 1; i < S.length; i++) {
//         S[i] === str[str.length - 1] ? str = str.slice(0, str.length - 1) : str += S[i]
//     }
//     return str
// }


// 相比修改字符串，数组的效率更高
const removeDuplicates = S => {
    const stack = []
    for (const str of S) {
        stack[stack.length - 1] === str ? stack.pop() : stack.push(str)
    }
    return stack.join('')
}

console.log(removeDuplicates('z'))
console.log(removeDuplicates('abccdde'))
console.log(removeDuplicates('abccde'))
console.log(removeDuplicates('dd'))
console.log(removeDuplicates('abbaca'))
