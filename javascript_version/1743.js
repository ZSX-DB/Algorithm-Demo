const restoreArray = adjacentPairs => {
    const numsSet = new Set()
    const collect = adjacentPairs.reduce((total, [x, y]) => {
        numsSet.add(x).add(y)
        total.set(x, total.has(x) ? [...total.get(x), y] : [y])
        total.set(y, total.has(y) ? [...total.get(y), x] : [x])
        return total
    }, new Map())
    const getKey = () => {
        for (const [key, value] of collect.entries()) {
            if (value.length === 1) return key
        }
    }
    const length = numsSet.size
    let key = getKey()
    const result = [key]
    while (collect.has(key)) {
        if (result.length === length) return result
        const value = collect.get(key)
        for (const val of value) {
            if (collect.has(val)) {
                result.push(val)
                collect.delete(key)
                key = val
            }
        }
    }
}

console.log(restoreArray([[2, 1], [3, 4], [3, 2]]))
console.log(restoreArray([[4, -2], [1, 4], [-3, 1]]))
