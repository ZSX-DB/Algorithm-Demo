const singleNumber = (nums: number[]): number[] => {
    const record: Map<number, number> = new Map()
    const result: number[] = []
    for (const num of nums) {
        if (record.has(num)) {
            record.set(num, record.get(num) + 1)
        } else {
            record.set(num, 1)
        }
    }
    record.forEach(((value, key) => {
        if (value === 1) {
            result.push(key)
        }
    }))
    return result
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]))
console.log(singleNumber([-1, 0]))
console.log(singleNumber([0, 1]))
