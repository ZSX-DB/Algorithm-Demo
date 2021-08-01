const kWeakestRows = (mat, k) => mat
    .map(nums => nums.reduce((total, num) => total + num, 0))
    .map((sum, index) => ({sum, index}))
    .sort((x, y) => x.sum !== y.sum ? (x.sum - y.sum) : (x.index - y.index))
    .slice(0, k)
    .map(obj => obj.index)

console.log(kWeakestRows([
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
], 3))

console.log(kWeakestRows([
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]
], 2))
