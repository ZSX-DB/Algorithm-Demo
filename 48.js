const rotate = matrix => {
    const res = []
    let idx = 0
    while (idx < matrix.length) {
        res[idx] = matrix.map(item => item[idx]).reverse()
        idx++
    }
    return res
}

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
