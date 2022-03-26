// 中心扩散法
// const longestPalindrome = (s: string): string => {
//     const length: number = s.length
//     if (length === 1) {
//         return s
//     } else if (length === 2) {
//         return s[0] === s[1] ? s : s[0]
//     }
//     let longestStr: string = ''
//     for (let i = 1; i < length - 1; i++) {
//         let left: number = i - 1
//         let right: number = i + 1
//         let temp: string = s[i]
//         while (s[left] === s[i]) {
//             temp = `${s[left]}${temp}`
//             left--
//         }
//         while (s[right] === s[i]) {
//             temp = `${temp}${s[right]}`
//             right++
//         }
//         while (s[left] !== undefined && s[right] !== undefined && s[left] === s[right]) {
//             temp = `${s[left]}${temp}${s[right]}`
//             left--
//             right++
//         }
//         longestStr = temp.length > longestStr.length ? temp : longestStr
//     }
//     return longestStr
// }

// 中心扩散法优化
const longestPalindrome = (s: string): string => {
    const length: number = s.length
    if (length === 1) {
        return s
    } else if (length === 2) {
        return s[0] === s[1] ? s : s[0]
    }
    let longestStr: string = ''
    for (let i = 1; i < length - 1; i++) {
        let left: number = i - 1
        let right: number = i + 1
        while (s[left] === s[i]) {
            left--
        }
        while (s[right] === s[i]) {
            right++
        }
        i = right - 1
        while (s[left] !== undefined && s[right] !== undefined && s[left] === s[right]) {
            left--
            right++
        }
        if (right - (left + 1) > longestStr.length) {
            longestStr = s.substring(left + 1, right)
        }
    }
    return longestStr
}

console.log(longestPalindrome('caba'))
console.log(longestPalindrome('zbgccccgbs'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ccc'))
console.log(longestPalindrome('d'))


