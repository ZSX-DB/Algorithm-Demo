const generate = numRows => {
    const list = []
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < i; j++) {
            row[j] = list[i - 1][j - 1] + list[i - 1][j]
        }
        list.push(row)
    }
    return list
}

console.log(generate(0))
console.log(generate(1))
console.log(generate(2))
console.log(generate(5))