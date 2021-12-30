const fourSum = (nums: number[], target: number): [number, number, number, number][] => {
    const result: [number, number, number, number][] = []
    const length: number = nums.length
    if (length < 4) {
        return result
    }
    nums.sort((x, y) => x - y)
    for (let i: number = 0; i < length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break
        }
        if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
            continue
        }
        for (let j: number = i + 1; j < length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break
            }
            if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
                continue
            }
            let left: number = j + 1
            let right: number = length - 1
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum < target) {
                    left++
                } else if (sum > target) {
                    right--
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    left++
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    right--
                }
            }
        }
    }
    return result
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
