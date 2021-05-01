// const twoSum = (numbers, target) => {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
//         }
//     }
// }

// 双指针
const twoSum = (numbers, target) => {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        if (numbers[left] + numbers[right] < target) {
            left++
        } else if (numbers[left] + numbers[right] > target) {
            right--
        } else {
            return [left + 1, right + 1]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))
