// class NumArray {
//     constructor(nums) {
//         this.nums = nums
//     }
//
//     sumRange(i, j) {
//         // 写法简化，但效率低
//         // return this.nums.reduce((acc, cur, idx) => acc + (idx >= i && idx <= j ? cur : 0), 0)
//         let sum = 0
//         for (let idx = i; idx <= j; idx++) {
//             sum += this.nums[idx]
//         }
//         return sum
//     }
// }

// 使用前缀和
class NumArray {
    constructor(nums) {
        this.nums = nums
        this.sums = new Array(this.nums.length + 1).fill(0)
        for (let i = 0; i < nums.length; i++) {
            this.sums[i + 1] = this.sums[i] + nums[i]
        }
    }

    sumRange(i, j) {
        return this.sums[j + 1] - this.sums[i]
    }
}

const na = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(na.sumRange(0, 2))
console.log(na.sumRange(2, 5))
console.log(na.sumRange(0, 5))

// const na = new NumArray([-2, 0, 3, -5, 2, -1])
// console.log(na.sumRange(0, 2))
// console.log(na.sumRange(2, 5))
// console.log(na.sumRange(0, 5))
