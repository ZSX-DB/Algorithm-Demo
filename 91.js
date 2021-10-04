const numDecodings = s => {
    if (s[0] === '0') return 0
    const len = s.length
    if (len === 1) return 1
    if (Number(s[0]) > 2 && s[1] === '0') return 0
    const dp = new Array(len).fill(0)
    const num = Number(`${s[0]}${s[1]}`)
    dp[0] = 1
    dp[1] = (num > 26 || num === 10 || num === 20) ? 1 : 2
    for (let i = 2; i < len; i++) {
        if (s[i] !== '0') dp[i] += dp[i - 1]
        if (s[i - 1] !== '0' && Number(`${s[i - 1]}${s[i]}`) <= 26) dp[i] += dp[i - 2]
    }
    return dp[len - 1]
}

// 以 1221 为例
// 第一种情况：在 s[3] 时，可以是 122 加 1，即 122 的总数 3
// 第二种情况：也可以是 12 加 21，即 12 的总数 2
// 两种情况不会重叠，第一种情况选了 12 2 不可能添加 1 出现 12 21 的可能性，故为 5


console.log(numDecodings('1221'))
console.log(numDecodings('1231'))
// console.log(numDecodings('2101'))
// console.log(numDecodings('11106'))
// console.log(numDecodings('226'))
// console.log(numDecodings('360'))

