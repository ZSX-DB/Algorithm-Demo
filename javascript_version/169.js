// 哈希计数
// const majorityElement = nums => {
//     const threshold = Math.ceil(nums.length / 2)
//     const record = new Map()
//     for (const num of nums) {
//         record.set(num, (record.get(num) || 0) + 1)
//         if (record.get(num) === threshold) return num
//     }
// }

// 当一个数的数量大于等于 nums.length / 2 , 排序后一定在中间
// const majorityElement = nums => nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)]

// 随机化, 当一个数的数量大于等于 nums.length / 2 , 为众数, 大概率第一个获得的就是正确值
// const majorityElement = nums => {
//     const threshold = Math.ceil(nums.length / 2)
//     while (true) {
//         const randomNum = nums[Math.floor(Math.random() * nums.length)]
//         let count = 0
//         for (const num of nums) {
//             if (num === randomNum) count++
//         }
//         if(count >= threshold) return randomNum
//     }
// }

// Boyer-Moore 投票算法
const majorityElement = nums => {
    let candidate = -1
    let count = 0
    for (const num of nums) {
        num === candidate ? count++ : count--
        if (count < 0) {
            candidate = num
            count = 1
        }
    }
    return candidate
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
