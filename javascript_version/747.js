const dominantIndex = nums => {
    const max = Math.max(...nums)
    const maxIdx = nums.indexOf(max)
    nums[maxIdx] = -Infinity
    return max >= Math.max(...nums) * 2 ? maxIdx : -1
}

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([1]))
