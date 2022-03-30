// const search = (nums: number[], target: number): number => nums.indexOf(target)

const search = (nums: number[], target: number): number => {
    const len: number = nums.length
    if (len === 1) {
        return target === nums[0] ? 0 : -1
    }
    let left: number = 0
    let right: number = len - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[len - 1]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}

console.log(search([6, 7, 8, 9, 10, 4, 5], 4))
console.log(search([8, 9, 10, 4, 5, 6, 7], 9))
console.log(search([4, 5, 6, 7, 1, 2, 3], 3))
