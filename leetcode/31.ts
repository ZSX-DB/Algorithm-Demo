const nextPermutation = (nums: number[]): void => {
    let len: number = nums.length
    let flag: boolean = true
    while (len) {
        len--
        if (nums[len] > nums[len - 1]) {
            for (let i = nums.length - 1; i > 0; i--) {
                if (nums[i] > nums[len - 1]) {
                    [nums[i], nums[len - 1]] = [nums[len - 1], nums[i]]
                    const list: number[] = nums.slice(len).reverse()
                    nums.length = len
                    nums.push(...list)
                    break
                }
            }
            flag = false
            break
        }
    }
    if (flag) {
        nums.sort((a, b) => a - b)
    }
}
