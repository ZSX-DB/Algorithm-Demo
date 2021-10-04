// const numberOfArithmeticSlices = nums => {
//     const list = []
//     const collect = []
//     const map = new Map()
//     for (let i = 0; i < nums.length - 1; i++) {
//         list.push(nums[i + 1] - nums[i])
//     }
//     for (let i = 0; i < list.length - 1; i++) {
//         let right = i + 1
//         while (list[i] === list[right]) {
//             right++
//         }
//         collect.push(right - i)
//         i = right - 1
//     }
//     let max = Math.max(...collect)
//     let sum = 0
//     for (let i = 0; i <= max; i++) {
//         sum += i
//         map.set(i, sum)
//     }
//     return collect.reduce((sum, num) => sum + (num === 1 ? 0 : map.get(num - 1)), 0)
// }

const numberOfArithmeticSlices = nums => {
    const len = nums.length
    if (len <= 2) {
        return 0
    }
    let diff = nums[0] - nums[1]
    let curr = 0
    let count = 0
    for (let i = 2; i < len; i++) {
        if (nums[i - 1] - nums[i] === diff) {
            curr++
        } else {
            diff = nums[i - 1] - nums[i]
            curr = 0
        }
        count += curr
    }
    return count
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4]))
console.log(numberOfArithmeticSlices([-9, 1, 2, 3, 6, 9, 12]))
console.log(numberOfArithmeticSlices([7, 7, 7, 7]))
console.log(numberOfArithmeticSlices([1, 3, 5, 7, 9]))
