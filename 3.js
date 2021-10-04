/**
 * 3、无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 * 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

const lengthOfLongestSubstring = s => {
    const window = []
    let maxlength = 0
    for (const ch of s) {
        let idx = window.indexOf(ch)
        if (idx !== -1) {
            window.splice(0, idx + 1)
        }
        window.push(ch)
        maxlength = Math.max(maxlength, window.length)
    }
    return maxlength
}


console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("aabaab!bb"))
