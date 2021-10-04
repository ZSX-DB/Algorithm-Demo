// const countSubstrings = s => {
//     let count = 0
//     const len = s.length
//     const dp = new Array(len).fill(0).map(_ => new Array(len).fill(false))
//     for (let j = 0; j < len; j++) {
//         for (let i = 0; i <= j; i++) {
//             if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
//                 dp[i][j] = true
//                 count++
//             }
//         }
//     }
//     return count
// }

const countSubstrings = s => {
    let count = s.length
    const helper = (left, right) => {
        while (s[left] && s[right] && s[left] === s[right]) {
            count++
            left--
            right++
        }
    }
    for (let i = 0; i < s.length; i++) {
        helper(i - 1, i)
        helper(i - 1, i + 1)
    }
    return count
}

console.log(countSubstrings('abc'))
console.log(countSubstrings('aaaa'))
