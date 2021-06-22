// 超时
// const validPalindrome = s => {
//     const isPalindrome = chs => {
//         let left = 0
//         let right = chs.length - 1
//         while (left < right) {
//             if (chs[left] !== chs[right]) return false
//             left++
//             right--
//         }
//         return true
//     }
//     if (isPalindrome(s)) return true
//     s = s.split('')
//     for (let i = 0; i < s.length; i++) {
//         if (isPalindrome(s.filter((_, idx) => idx !== i))) return true
//     }
//     return false
// }

// 贪心
// const validPalindrome = s => {
//     const verifyLeft = (left = 0, right = s.length - 1, count = 0) => {
//         while (left < right) {
//             if (s[left] !== s[right]) {
//                 left++
//                 count++
//             } else {
//                 left++
//                 right--
//             }
//         }
//         return count
//     }
//     const verifyRight = (left = 0, right = s.length - 1, count = 0) => {
//         while (left < right) {
//             if (s[left] !== s[right]) {
//                 right--
//                 count++
//             } else {
//                 left++
//                 right--
//             }
//         }
//         return count
//     }
//     return (verifyLeft() <= 1) || (verifyRight() <= 1)
// }

// 贪心优化
const validPalindrome = s => {
    const verify = (isLeft, left = 0, right = s.length - 1, count = 0) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                isLeft ? left++ : right--
                count++
                if (count > 1) return false
            } else {
                left++
                right--
            }
        }
        return count <= 1
    }
    return verify(true) || verify(false)
}

console.log(validPalindrome('aba'))
console.log(validPalindrome('abcza'))
console.log(validPalindrome('aabbcczzzzdccbbaa'))
