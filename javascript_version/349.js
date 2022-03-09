// const intersection = (nums1, nums2) => {
//     const res = []
//     const map = new Map()
//     for (const num of nums1) {
//         map.get(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)
//     }
//     for(const num of nums2){
//         if(map.get(num)){
//             res.push(num)
//             map.set(num, map.get(num) - 1)
//         }
//     }
//     return [...new Set(res)]
// }

// const intersection = (nums1, nums2) => {
//     const res = []
//     nums1.forEach(item => {
//         if (nums2.includes(item)) {
//             res.push(item)
//             nums2[nums2.indexOf(item)] = null
//         }
//     })
//     return [...new Set(res)]
// }

const intersection = (nums1, nums2) => {
    const res = []
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    const len1 = nums1.length
    const len2 = nums2.length
    let idx1 = 0
    let idx2 = 0

    while (idx1 < len1 && idx2 < len2) {
        if (nums1[idx1] > nums2[idx2]) {
            idx2++
        } else if (nums1[idx1] < nums2[idx2]) {
            idx1++
        } else {
            res.push(nums1[idx1])
            idx1++
            idx2++
        }
    }

    return [...new Set(res)]

}

console.log(intersection([3, 5, 9, 7, 1], [2, 4, 6, 7, 9]))
console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([2, 2], [1, 2, 2, 1]))
