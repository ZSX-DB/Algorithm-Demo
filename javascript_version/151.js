const reverseWords = s => s
    .split(' ')
    .filter(str => str !== '')
    .reverse()
    .join(' ')


// const reverseWords = s => {
//     let str = ''
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i] === ' ') continue
//         let word = ''
//         while (s[i] !== ' ' && i >= 0) {
//             word = s[i] + word
//             i--
//         }
//         str = str + ' ' + word
//     }
//     return str.trim()
// }

// 双指针
// const reverseWords = s => {
//     s = s.trim().split(/\s+/)
//     let len = s.length - 1
//     let idx = 0
//     while (idx < Math.ceil(len / 2)) {
//         [s[idx], s[len - idx]] = [s[len - idx], s[idx]]
//         idx++
//     }
//     return s.join(' ')
// }


console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world!  '))
console.log(reverseWords('a good   example'))
