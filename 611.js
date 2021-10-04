// const triangleNumber = nums => {
//     nums = nums.filter(num => num !== 0).sort((x, y) => x - y)
//     let count = 0
//     const isTriangle = (x, y, z) => x + y > z
//     const helper = (cur, idx) => {
//         if (cur.length < 3) {
//             for (let i = idx + 1; i < nums.length; i++) {
//                 helper([...cur, nums[i]], i)
//             }
//         } else if (cur.length === 3) {
//             isTriangle(...cur) && count++
//         }
//     }
//     helper([], -1)
//     return count
// }

const triangleNumber = nums => {
    nums = nums.filter(num => num !== 0).sort((x, y) => x - y)
    if (nums.length < 3) return 0
    const len = nums.length
    let count = 0
    for (let i = 0; i < len; i++) {
        let k = i
        for (let j = i + 1; j < len; j++) {
            while (k + 1 < len && nums[k + 1] < nums[i] + nums[j]) {
                k++
            }
            count += k - j
        }
    }
    return count
}

console.log(triangleNumber([2, 2, 2, 3, 3]))
console.log(triangleNumber([4, 4, 4, 4, 4, 4]))
console.log(triangleNumber([2, 2, 3, 4]))
