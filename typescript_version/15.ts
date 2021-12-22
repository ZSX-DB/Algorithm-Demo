const threeSum = (nums: number[]): [number, number, number][] => {
    const result: [number, number, number][] = []
    const length: number = nums.length
    nums.sort((x, y) => x - y)
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            break
        }
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
            }
        }
    }
    return result
}
