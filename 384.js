class Solution {
    constructor(nums) {
        this.nums = nums
        this.copy = [...nums]
    }

    shuffle() {
        const nums = this.nums
        let end = nums.length - 1
        while (end >= 0) {
            const rand = Math.floor(Math.random() * (end + 1));
            [nums[end], nums[rand]] = [nums[rand], nums[end]]
            end--
        }
        return nums
    }

    reset() {
        return this.copy
    }

}
