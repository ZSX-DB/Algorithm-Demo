const maxEnvelopes = envelopes => {
    const len = envelopes.length
    if (len <= 1) return len

    envelopes.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1])

    const list = new Array(len).fill(1)

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[j][1] < envelopes[i][1]) list[i] = Math.max(list[i], list[j] + 1)
        }
    }

    return Math.max(...list)
}


console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 4]]))
console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]))
console.log(maxEnvelopes([]))
console.log(maxEnvelopes([[1, 1], [1, 1]]))
console.log(maxEnvelopes([[2, 100], [3, 200], [4, 300], [5, 500], [5, 400], [5, 250], [6, 370], [5, 400], [6, 360], [7, 380]]))
