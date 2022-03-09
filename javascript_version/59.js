const generateMatrix = n => {

    const res = new Array(n).fill(0).map(() => new Array(n).fill(0))

    let cur = 1
    let left = 0
    let right = n - 1
    let top = 0
    let bottom = n - 1

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res[top][i] = cur
            cur++
        }
        top++

        for (let i = top; i <= bottom; i++) {
            res[i][right] = cur
            cur++
        }
        right--

        for (let i = right; i >= left; i--) {
            res[bottom][i] = cur
            cur++
        }
        bottom--

        for (let i = bottom; i >= top; i--) {
            res[i][left] = cur
            cur++
        }
        left++

    }

    return res

}

// console.log(generateMatrix(0))
// console.log(generateMatrix(1))
// console.log(generateMatrix(2))
// console.log(generateMatrix(4))
console.log(generateMatrix(5))
