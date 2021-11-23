// const integerReplacement = (n: number): number => {
//     const helper = (num: number): number => {
//         if (num === 1) {
//             return 0
//         } else if (num % 2 === 0) {
//             return 1 + helper(num / 2)
//         } else {
//             return 1 + Math.min(helper(num + 1), helper(num - 1))
//         }
//     }
//     return helper(n)
// }

// 记忆化搜索
const integerReplacement = (n: number): number => {
    const memo: Map<number, number> = new Map<number, number>([[1, 0], [2, 1], [3, 2], [4, 2]])
    const helper = (num: number): number => {
        if (memo.has(num) === false) {
            memo.set(num, 1 + (num % 2 === 0 ? helper(num / 2) : Math.min(helper(num + 1), helper(num - 1))))
        }
        return memo.get(num)
    }
    return helper(n)
}

// 贪心
// const integerReplacement = (n: number): number => {
//     let count: number = 0
//     while (n !== 1) {
//         if (n % 2 === 0) {
//             count++
//             n /= 2
//         } else if (n % 4 === 1) {
//             count += 2
//             n = Math.floor(n / 2)
//         } else {
//             count += 2
//             n = (n === 3 ? 1 : Math.floor(n / 2) + 1)
//         }
//     }
//     return count
// }


console.log(integerReplacement(9))
console.log(integerReplacement(8))
console.log(integerReplacement(7))
console.log(integerReplacement(4))
