class NumArray {
    constructor(nums) {
        this.nums = nums
        this.prefixEnd = [nums[0]]
        for (let i = 1; i < nums.length; i++) {
            this.prefixEnd[i] = this.prefixEnd[i - 1] + nums[i]
        }
    }

    update(index, val) {
        const tmp = this.nums[index]
        const diff = val - tmp
        this.nums[index] = val
        for (let i = index; i < this.prefixEnd.length; i++) {
            this.prefixEnd[i] += diff
        }
    }

    sumRange(left, right) {
        return this.prefixEnd[right] - this.prefixEnd[left] + this.nums[left]
    }
}


const na = new NumArray([1, 3, 5])
console.log(na.sumRange(0, 2))
na.update(1, 2)
console.log(na.sumRange(0, 2))
