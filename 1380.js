const luckyNumbers = matrix => {
    const minRows = matrix.map(row => Math.min(...row))
    const maxCols = matrix[0].map((_, idx) => Math.max(...matrix.map(row => row[idx])))
    const total = [...minRows, ...maxCols]
    const collect = new Map()
    const result = []
    for (const item of total) {
        if (collect.has(item)) {
            result.push(item)
            continue
        }
        collect.set(item, true)
    }
    return result
}


console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]))
console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17], [28, 25, 27]]))
