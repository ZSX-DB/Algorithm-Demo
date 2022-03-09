// const longestSubarray = (nums, limit) => {
//     let list = [nums[0]]
//     let max = list[0]
//     let min = list[0]
//
//     let maxCount = 1
//
//     for (let i = 1; i < nums.length; i++) {
//
//         if (nums[i] <= max && nums[i] >= min) {
//             list.push(nums[i])
//         } else if (nums[i] > max && nums[i] - min <= limit) {
//             max = nums[i]
//             list.push(nums[i])
//         } else if (nums[i] < min && max - nums[i] <= limit) {
//             min = nums[i]
//             list.push(nums[i])
//         } else if ((nums[i] > max && nums[i] - max > limit) || (nums[i] < min && min - nums[i] > limit)) {
//             list = [nums[i]]
//             max = list[0]
//             min = list[0]
//         } else {
//
//             let idx = list.length - 1
//             while (idx > 0) {
//                 if (Math.abs(nums[i] - list[idx]) > limit) break
//                 idx--
//             }
//
//             list = list.slice(idx + 1)
//
//             list.push(nums[i])
//             max = Math.max(...list)
//             min = Math.min(...list)
//         }
//
//         maxCount = Math.max(maxCount, list.length)
//     }
//     return maxCount
// }

const longestSubarray = (nums, limit) => {
    const queMax = []
    const queMin = []
    const len = nums.length

    let left = 0
    let right = 0

    while (right < len) {

        while (queMax.length && queMax[queMax.length - 1] < nums[right]) {
            queMax.pop()
        }

        while (queMin.length && queMin[queMin.length - 1] > nums[right]) {
            queMin.pop()
        }

        queMax.push(nums[right])
        queMin.push(nums[right])

        if (queMax[0] - queMin[0] > limit) {
            if (nums[left] === queMin[0]) queMin.shift()
            if (nums[left] === queMax[0]) queMax.shift()

            left++
        }
        right++
    }

    return right - left

}

console.log(longestSubarray([8, 2, 4, 7], 4))
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5))
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0))
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0))