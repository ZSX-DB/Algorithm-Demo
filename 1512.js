const numIdenticalPairs = nums =>
    [...nums.reduce((records, num, idx) => records.set(num, records.has(num) ? [...records.get(num), idx] : [idx]), new Map()).values()]
        .map(record => (record.length * (record.length - 1) / 2))
        .reduce((sum, num) => sum + num, 0)


console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
console.log(numIdenticalPairs([1, 1, 1, 1]))
