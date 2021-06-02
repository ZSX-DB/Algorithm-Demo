const topKFrequent = (nums, k) => [...nums.reduce((record, num) => record.set(num, (record.get(num) || 0) + 1), new Map())].sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0])

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
