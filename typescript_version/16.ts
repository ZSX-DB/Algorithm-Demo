const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((x, y) => x - y)
    let result: number = nums[0] + nums[1] + nums[2]
    const changeResult = (sum: number): void => {
        if (Math.abs(sum - target) < Math.abs(result - target)) {
            result = sum
        }
    }
    const length: number = nums.length
    for (let i = 0; i < length; i++) {
        let left = i + 1
        let right = length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                return target
            }
            changeResult(sum)
        }

    }
    return result
}
