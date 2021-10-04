/**
 * 28、实现 strStr()
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 链接：https://leetcode-cn.com/problems/implement-strstr
 */


// const strStr = (haystack, needle) => haystack.indexOf(needle)

const strStr = (haystack, needle) => {
    if (needle === '' || haystack === needle) return 0
    if (haystack.length < needle.length) return -1
    const len = needle.length
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let idx = 0
            while (idx < len) {
                if (haystack[i + idx] !== needle[idx]) break
                idx++
            }
            if(idx === len) return i
        }
    }
    return -1
}

// console.log(strStr('idea', 'ea'))
// console.log(strStr('idea', 'a'))
// console.log(strStr('idea', 'ac'))
// console.log(strStr('idea', 'de'))
// console.log(strStr('idea', ''))
console.log(strStr('aaaa', 'baaa'))
