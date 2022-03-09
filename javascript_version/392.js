// const isSubsequence = (s, t) => {
//     const sLen = s.length
//     const tLen = t.length
//     if(sLen > tLen) return false
//     s = s.split('')
//     for(let i=0;i<tLen;i++){
//         if(t[i]===s[0]) s.shift()
//     }
//     return s.length === 0
// }

// 双指针
// const isSubsequence = (s, t) => {
//     const sLen = s.length
//     const tLen = t.length
//     if (sLen > tLen) return false
//     let i = 0, j = 0
//     while (i < tLen && j < tLen) {
//         if (s[i] === t[j]) i++
//         j++
//     }
//     return i === sLen
// }

// 递归(思路类似于栈)
const isSubsequence = (s, t) => {
    if (s.length === 0) return true
    let i = 0
    while (i < t.length) {
        if (s[0] === t[i]) {
            s = s.substring(1)
            t = t.substring(i+1)
            return isSubsequence(s, t)
        }
        i++
    }
    return false
}

console.log(isSubsequence('', ''))
console.log(isSubsequence('g', 'ahbgdc'))
console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
console.log(isSubsequence('adg', 'ahbgdc'))
console.log(isSubsequence('b', 'c'))
console.log(isSubsequence('bc', 'c'))
console.log(isSubsequence("aaaaaa", "bbaaaa"))
