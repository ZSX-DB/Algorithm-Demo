// 排序
// const thirdMax = (nums: number[]): number => {
//     nums = [...new Set(nums)].sort((x, y) => y - x)
//     if (nums.length >= 3) {
//         return nums[2]
//     } else {
//         return nums[0]
//     }
// }

// 有序集合
const thirdMax = (nums: number[]): number => {
    nums.sort((x, y) => x - y)
    const collect: number[] = []
    for (const num of nums) {
        if (collect.includes(num)) {
            continue
        }
        if (collect.length === 3) {
            collect.shift()
        }
        collect.push(num)
    }
    if (collect.length < 3) {
        return collect[collect.length - 1]
    } else {
        return collect[0]
    }
}

console.log(thirdMax([2, 2, 3, 1]))
