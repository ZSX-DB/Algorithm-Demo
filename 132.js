const minCut = s => {
    const len = s.length
    const list = new Array(len).fill(0).map(() => new Array(len).fill(true))

    // 判断0->1是否是回文串
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            list[i][j] = (s[i] === s[j] && list[i + 1][j - 1])
        }
    }

    const arr = new Array(len).fill(Number.MAX_SAFE_INTEGER)

    for (let i = 0; i < len; i++) {
        if (list[0][i]) {
            arr[i] = 0
        } else {
            for (let j = 0; j < i; j++) {
                if (list[j + 1][i]) arr[i] = Math.min(arr[i], arr[j] + 1)
            }
        }
    }

    return arr[len-1]
}

console.log(minCut('ababac'))
console.log(minCut('bb'))
console.log(minCut('bbb'))
console.log(minCut('bcb'))
console.log(minCut("fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi"))
console.log(minCut('acabbacal'))
console.log(minCut('cabacdgdcabh'))
console.log(minCut('fifgbeajcacehiicccfecb'))

