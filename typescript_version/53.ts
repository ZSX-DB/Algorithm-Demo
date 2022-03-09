// const maxSubArray = (nums: number[]): number =>
//     nums.reduce<[number, number]>((prev, num) => {
//         let [maxSum, pre] = prev
//         pre = Math.max(pre + num, num)
//         maxSum = Math.max(maxSum, pre)
//         return [maxSum, pre]
//     }, [nums[0], 0])[0]

const maxSubArray = (nums: number[]): number => {
    let maxSum: number = nums[0]
    let pre: number = 0
    nums.forEach(num => {
        pre = Math.max(pre + num, num)
        maxSum = Math.max(maxSum, pre)
    })
    return maxSum
}
