const spiralOrder = matrix => {
    if (matrix[0].length === 0) return []
    if (matrix[0].length === 1) return matrix.map(item => item[0])

    const res = []
    if (matrix.length === 1) {
        res.push(...matrix[0])
    } else if (matrix.length === 2) {
        res.push(...matrix[0], ...matrix[1].reverse())
    } else {
        const top = matrix.shift()
        const bottom = matrix.pop()
        const left = []
        const right = []
        matrix.forEach(item => {
            left.push(item.shift())
            right.push(item.pop())
        })
        res.push(...top, ...right, ...bottom.reverse(), ...left.reverse(), ...spiralOrder(matrix))
    }
    return res
}

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))
console.log(spiralOrder([[7], [9], [6], [11]]))
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]]))
console.log(spiralOrder([[1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19], [10, 20]]))
