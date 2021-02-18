const matrixReshape = (nums, r, c) => {
    if (nums.length * nums[0].length !== r * c) return nums
    const all = nums.reduce((pre, cur) => {
        pre.push(...cur)
        return pre
    })
    const list = []
    for (let i = 0; i < all.length; i += c) {
        list.push(all.slice(i, i + c))
    }
    return list
}


console.log(matrixReshape([[1, 2], [3, 4]], 1, 4))
console.log(matrixReshape([[1, 2], [3, 4], [5, 6], [7, 8]], 2, 4))
console.log(matrixReshape([[1, 2], [3, 4], [5, 6]], 2, 3))
