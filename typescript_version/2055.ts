const platesBetweenCandles = (s: string, queries: [number, number][]): number[] => {
    const n: number = s.length
    const preSum: number[] = Array<number>(n).fill(0)
    const left: number[] = Array<number>(n).fill(0)
    const right: number[] = Array<number>(n).fill(0)
    for (let i = 0, sum = 0; i < n; i++) {
        if (s[i] === '*') {
            sum++
        }
        preSum[i] = sum
    }
    for (let i = 0, l = -1; i < n; i++) {
        if (s[i] === '|') {
            l = i
        }
        left[i] = l
    }
    for (let i = n - 1, r = -1; i >= 0; i--) {
        if (s[i] === '|') {
            r = i
        }
        right[i] = r
    }
    return queries.map(query => {
        const x = right[query[0]]
        const y = left[query[1]]
        return (x === -1 || y === -1 || x >= y) ? 0 : preSum[y] - preSum[x]
    })
}
