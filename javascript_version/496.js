// 暴力双层循环法
// const nextGreaterElement = (nums1, nums2) => {
//     const len = nums2.length
//     const res = []
//     for (const num of nums1) {
//         const idx = nums2.indexOf(num) + 1
//         let tmp = -1
//         for (let i = idx; i < len; i++) {
//             if (nums2[i] > num) {
//                 tmp = nums2[i]
//                 break
//             }
//         }
//         res.push(tmp)
//     }
//     return res
// }

// 单独递减栈
const nextGreaterElement = (nums1, nums2) => {
    const stack = []
    const map = new Map()
    for (const num of nums2) {
        if (stack.length && num > stack[stack.length - 1]) {
            while (stack[stack.length - 1] < num) {
                map.set(stack.pop(), num)
            }
        }
        stack.push(num)
    }
    return nums1.map(item => map.get(item) || -1)
}


console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
console.log(nextGreaterElement([9, 4], [1, 2, 4, 3, 9]))
console.log(nextGreaterElement([3, 2], [3, 2, 7]))
console.log(nextGreaterElement([3, 4], [5, 3, 4, 6]))
