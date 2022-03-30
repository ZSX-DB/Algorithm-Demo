// const searchRange = (nums: number[], target: number): number[] => {
//     const matchIdx = (): number => {
//         let left: number = 0
//         let right: number = nums.length - 1
//         while (left <= right) {
//             const mid: number = Math.floor((left + right) / 2)
//             if (nums[mid] > target) {
//                 right = mid - 1
//             } else if (nums[mid] < target) {
//                 left = mid + 1
//             } else {
//                 return mid
//             }
//         }
//         return -1
//     }
//     const idx: number = matchIdx()
//     if (idx === -1) {
//         return [-1, -1]
//     }
//     let start: number = idx
//     let end: number = idx
//     while (nums[start - 1] === target) {
//         start--
//     }
//     while (nums[end + 1] === target) {
//         end++
//     }
//     return [start, end]
// }

const searchRange = (nums: number[], target: number): number[] => {
    let left: number = 0
    let right: number = nums.length - 1
    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            let start: number = mid
            let end: number = mid
            while (nums[start - 1] === target) {
                start--
            }
            while (nums[end + 1] === target) {
                end++
            }
            return [start, end]
        }
    }
    return [-1, -1]
}
