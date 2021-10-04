// const largestNumber = nums => {
//     nums.sort((a, b) => `${b}${a}` - `${a}${b}`)
//     return nums[0] !== 0 ? nums.join('') : '0'
// }

const largestNumber = nums => nums
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join('')
    .replace(/^0+/, '0')


console.log(largestNumber([10, 2]))
console.log(largestNumber([0]))
console.log(largestNumber([3, 9, 30, 34, 5]))
console.log(largestNumber([111311, 1113]))
console.log(largestNumber([0, 0]))
