const flipAndInvertImage = A => A.map(item => item.reverse().map(i => i === 0 ? 1 : 0))

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))