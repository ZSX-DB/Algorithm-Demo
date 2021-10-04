const leastBricks = wall => {
    const record = new Map()
    wall.forEach(item => {
        let count = 0
        for (let i = 0; i < item.length - 1; i++) {
            count += item[i]
            record.set(count, (record.get(count) || 0) + 1)
        }
    })
    return record.size === 0 ? wall.length : wall.length - Math.max(...[...record].map(pair => pair[1]))
}

console.log(leastBricks([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]))
console.log(leastBricks([[1], [1], [1]]))
