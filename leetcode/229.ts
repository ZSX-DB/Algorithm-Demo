// const majorityElement = (nums: number[]): number[] => {
//     const base: number = nums.length / 3
//     const record: Map<number, number> = new Map()
//     const result: number[] = []
//     for (const num of nums) {
//         if (record.has(num)) {
//             record.set(num, record.get(num) + 1)
//         } else {
//             record.set(num, 1)
//         }
//     }
//     for (const [key, value] of record) {
//         if (value > base) {
//             result.push(key)
//         }
//     }
//     return result
// }

// 限定条件 1 <= nums.length <= 5 * 10**4
const majorityElement = (nums: number[]): number[] => {
    // n1 n2 是出现次数最多的两个
    let n1 = 0
    let c1 = 0
    let n2 = 0
    let c2 = 0
    for (const num of nums) {
        if (c1 > 0 && n1 === num) {
            c1++
        } else if (c2 > 0 && n2 === num) {
            c2++
        } else if (c1 === 0) {
            n1 = num
            c1++
        } else if (c2 === 0) {
            n2 = num
            c2++
        } else {
            c1--
            c2--
        }
    }
    // 重置计数为 0
    c1 = 0
    c2 = 0
    for (const num of nums) {
        if (n1 === num) {
            c1++
        } else if (n2 === num) {
            c2++
        }
    }
    const result: number[] = []
    const base: number = nums.length / 3
    if (c1 > base) {
        result.push(n1)
    }
    if (c2 > base) {
        result.push(n2)
    }
    return result
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([1]))
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))
console.log(majorityElement([1, 1, 1, 1, 1, 1, 2, 2]))
console.log(majorityElement([1, 2, 3]))
