/**
 * 14、最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串 ""。
 * 链接：https://leetcode-cn.com/problems/longest-common-prefix/
 */

// function longestCommonPrefix(strs) {
//
//     if(strs.length===0){
//         return ''
//     }
//
//     // num接收最长公共前缀的长度
//     let minLen = strs[0].length,
//         num = 0,
//         letterArr = []
//     // 获取最短长度
//     strs.forEach(item => {
//         if (item.length < minLen) {
//             minLen = item.length
//         }
//     })
//
//     const isSame = val => val === letterArr[0],
//         changeNum = () => {
//             if (letterArr.every(isSame)) {
//                 num += 1
//                 letterArr = []
//             } else {
//                 num += 0
//             }
//         }
//
//     for (let i = 0; i < minLen; i++) {
//         strs.forEach(item => {
//             letterArr.push(item[i])
//         })
//         changeNum()
//     }
//
//     return num === 0 ? "" : strs[0].substring(0, num)
//
// }

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ''
    }
    let temp = strs[0],
        len = strs.length
    for (let i = 1; i < len; i++) {
        let j = 0
        for (; j < temp.length && j < strs[i].length; j++) {
            if (temp[j] !== strs[i][j]) break
        }
        temp = temp.substring(0, j)
        if (temp === '') {
            return temp
        }
    }

    return temp

}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix(["7", "7", "78"]))


