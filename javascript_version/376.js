// 贪心算法
// const wiggleMaxLength = nums => {
//     const len = nums.length
//     if (len <= 1) return len
//     let list = []
//     for (let i = 1; i < len; i++) {
//         list.push(nums[i] - nums[i - 1])
//     }
//     list = list.filter(item => item !== 0)
//     let cur = list[0]
//     let count = 1
//     for (let i = 1; i < list.length; i++) {
//         if ((cur > 0 && list[i] < 0) || (cur < 0 && list[i] > 0)) {
//             cur = list[i]
//             count++
//         }
//     }
//
//     return list.length !== 0 ? count + 1 : count
// }

// 动态规划
const wiggleMaxLength = nums => {
    const len = nums.length
    if(len <= 1) return len
    let up = 1
    let down = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1
        } else if (nums[i] < nums[i - 1]) {
            down = up + 1
        }
    }
    return Math.max(up, down)
}


console.log(wiggleMaxLength([]))
console.log(wiggleMaxLength([1]))
console.log(wiggleMaxLength([3, 4]))
console.log(wiggleMaxLength([4, 3]))
console.log(wiggleMaxLength([4, 3, 5]))
console.log(wiggleMaxLength([3, 4, 2]))
console.log(wiggleMaxLength([3, 4, 5]))
console.log(wiggleMaxLength([5, 4, 3]))
console.log(wiggleMaxLength([6, 6, 6]))
console.log(wiggleMaxLength([7, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([7, 7, 4, 9, 9, 2, 5]))
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))