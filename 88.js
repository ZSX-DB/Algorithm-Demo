// const merge = (nums1, m, nums2, n) => {
//     nums1.splice(m, nums1.length - m, ...nums2)
//     nums1.sort((a, b) => a - b)
//     return nums1
// }

// const merge = (nums1, m, nums2, n) => {
//     const array = new Array(m + n)
//     let p1 = 0
//     let p2 = 0
//     let cur = 0
//     while (p1 < m || p2 < n) {
//         if (p1 === m) {
//             cur = nums2[p2++]
//         } else if (p2 === n) {
//             cur = nums1[p1++]
//         } else if (nums1[p1] < nums2[p2]) {
//             cur = nums1[p1++]
//         } else {
//             cur = nums2[p2++]
//         }
//         array[p1 + p2 - 1] = cur
//     }
//     for (let i = 0; i < m + n; i++) {
//         nums1[i] = array[i]
//     }
//     return nums1
// }

const merge = (nums1, m, nums2, n) => {
    const searchBigger = (list, num, last) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i] > num || i >= last) return i
        }
        return list.length
    }
    let last = m
    for (let i = 0; i < m + n; i++) {
        const idx = searchBigger(nums1, nums2[i], last)
        nums1.splice(idx, 0, nums2[i])
        nums1.pop()
        last++
    }
    return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([1, 0, 0], 1, [2, 3], 2))
console.log(merge([0], 0, [1], 1))




