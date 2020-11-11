/**
 * 28、实现 strStr()
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 链接：https://leetcode-cn.com/problems/implement-strstr
 */


function strStr(haystack, needle) {
    return haystack.indexOf(needle)
}

console.log(strStr('idea','ea'))
console.log(strStr('idea','a'))
console.log(strStr('idea','ac'))
console.log(strStr('idea',''))