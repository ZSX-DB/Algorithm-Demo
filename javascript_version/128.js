// const longestConsecutive = nums => {
//     if (nums.length === 0) return 0
//     nums.sort((x, y) => x - y)
//     let count = 1
//     let max = 1
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) continue
//         if (nums[i] === nums[i - 1] + 1) {
//             count++
//             max = Math.max(count, max)
//         } else {
//             count = 1
//         }
//     }
//     return max
// }

const longestConsecutive = nums => {
    if (nums.length === 0) return 0
    const numSet = new Set()
    nums.forEach(num => {
        numSet.add(num)
    })
    let max = 1
    for (const num of numSet) {
        if (numSet.has(num - 1)) continue
        let cur = num
        while (numSet.has(cur + 1)) {
            cur++
        }
        max = Math.max(cur - num + 1, max)
    }
    return max
}

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))
