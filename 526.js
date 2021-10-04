const countArrangement = n => {
    const arr = Array(n).fill(0).map((_, index) => index + 1)
    let count = 0
    const helper = (len, surplus) => {
        if (len === n) {
            count++
            return
        }
        const i = len + 1
        for (let idx = 0; idx < surplus.length; idx++) {
            if (surplus[idx] % i === 0 || i % surplus[idx] === 0) {
                helper(len + 1, surplus.filter(num => num !== surplus[idx]))
            }
        }
    }
    helper(0, arr)
    return count
}

// const countArrangement = n => [1, 2, 3, 8, 10, 36, 41, 132, 250, 700, 750, 4010, 4237, 10680, 24679][n - 1]

console.log(countArrangement(2))
console.log(countArrangement(3))
console.log(countArrangement(15))
