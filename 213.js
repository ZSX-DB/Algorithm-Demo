const rob = nums => {
    const len = nums.length
    if(len <= 2) return [0, nums[0], Math.max(...nums)][len]
    const strNums = JSON.stringify(nums)
    const numsA = JSON.parse(strNums).slice(0, len-1)
    const numsB = JSON.parse(strNums).slice(1, len)
    const robsimple = nums => {
        const dp = [nums[0], Math.max(nums[0], nums[1])]
        for(let i=2;i<nums.length;i++){
            dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
        }
        return dp[dp.length-1]
    }
    return Math.max(robsimple(numsA), robsimple(numsB))
}

console.log(rob([1,2,3,1]))
console.log(rob([2,3,2]))
console.log(rob([0]))
console.log(rob([2,3]))
