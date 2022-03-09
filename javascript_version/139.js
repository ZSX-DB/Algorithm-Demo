/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    const len = s.length
    const wordSet = new Set(wordDict)
    const dp = Array(len + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[len]
}

console.log(wordBreak('leetcode', ['leet', 'code', 'leeco']))
console.log(wordBreak('applepenapple', ['apple', 'pen', 'apple']))
