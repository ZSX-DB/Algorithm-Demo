const fourSumCount = (nums1, nums2, nums3, nums4) => {
    const collect = new Map()
    let count = 0
    nums1.forEach(n1 => {
        nums2.forEach(n2 => {
            collect.set(n1 + n2, (collect.get(n1 + n2) || 0) + 1)
        })
    })
    nums3.forEach(n3 => {
        nums4.forEach(n4 => {
            if (collect.has(-(n3 + n4))) count += collect.get(-(n3 + n4))
        })
    })
    return count
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
console.log(fourSumCount(
    [-1, -1],
    [-1, 1],
    [-1, 1],
    [1, -1]))
