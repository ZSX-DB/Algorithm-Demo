/**
 * 5、最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 链接：https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

// const longestPalindrome = s => {
//     let len = s.length
//     let res = ''
//     let dp = Array.from(new Array(len), () => new Array(len).fill(0))
//     for (let i = len - 1; i >= 0; i--) {
//         for (let j = i; j < len; j++) {
//             dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
//             if (dp[i][j] && j - i + 1 > res.length) {
//                 res = s.substring(i, j + 1)
//             }
//         }
//     }
//     return res
// }

const longestPalindrome = s => {
    const len = s.length
    if (len === 1) return s
    if (len === 2) return s[0] === s[1] ? s : s[0]
    let longest = s[0]
    for (let i = 1; i < len - 1; i++) {
        let left = i - 1
        let right = i + 1
        let count = 1
        while (s[left] && s[left] === s[i]) {
            left--
        }
        while (s[right] && s[right] === s[i]) {
            right++
        }
        count += (right - left - 2)
        while (s[left] && s[right] && s[left] === s[right]) {
            left--
            right++
            count += 2
        }
        if (count > longest.length) longest = s.substring(left + 1, right)
    }
    return longest
}

console.log(longestPalindrome('abcbd'))
console.log(longestPalindrome('abccbd'))
console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('ccc'))
console.log(longestPalindrome('aacabdkacaa'))


