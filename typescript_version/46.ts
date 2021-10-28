const permute = (nums: number[]): number[][] => {
    const result: number[][] = []
    const used: boolean[] = []
    const backtrack = (path: number[]) => {
        if (path.length === nums.length) {
            result.push(path)
            return
        }
        for (const num of nums) {
            if (used[num] === true) {
                continue
            }
            used[num] = true
            backtrack([...path, num])
            used[num] = false
        }
    }
    backtrack([])
    return result
}
