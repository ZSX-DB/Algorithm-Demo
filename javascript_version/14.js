/**
 * 14、最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串 ""。
 * 链接：https://leetcode-cn.com/problems/longest-common-prefix/
 */

// 纵向扫描
// const longestCommonPrefix = strs => {
//     const minLen = strs.length === 0 ? 0 : Math.min(...strs.map(str => str.length))
//     let pre = ''
//     for (let i = 0; i < minLen; i++) {
//         if(strs.every(str => str[i] === strs[0][i]) === false){
//             break
//         }
//         pre += strs[0][i]
//     }
//     return pre
// }

// 横向扫描
const longestCommonPrefix = strs => {
    if (strs.length === 0) return ''
    const lcp = (str1, str2) => {
        const len = Math.min(str1.length, str2.length)
        let idx = 0
        while (idx < len && str1[idx] === str2[idx]) {
            idx++
        }
        return str1.substring(0, idx)
    }
    let pre = strs[0]
    for (let i = 1; i < strs.length; i++) {
        pre = lcp(pre, strs[i])
        if (pre === '') {
            break
        }
    }
    return pre
}


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix(["7", "7", "78"]))
console.log(longestCommonPrefix(['']))
console.log(longestCommonPrefix(["acc", "aaa", "aaba"]))


