const twoSum = (nums: number[], target: number): number[] => {
    const record: Map<number, number> = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const diff = target - num
        if (record.has(diff)) {
            return [i, record.get(diff)]
        } else {
            record.set(num, i)
        }
    }
    return []
}
