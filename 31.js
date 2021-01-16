/**
 * 31、下一个排列
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须 原地 修改，只允许使用额外常数空间。
 * 链接：https://leetcode-cn.com/problems/next-permutation/
 */

// const nextPermutation = nums => {
//     let len = nums.length
//     while (len) {
//         len--
//         if (nums[len] > nums[len - 1]) {
//             const tmpNum = nums[len-1]
//             const tmpList = nums.slice(len-1, nums.length)
//             tmpList.sort((a, b)=> a-b)
//             const biggerIndex = tmpList.lastIndexOf(tmpNum) + 1
//             nums[len-1] = tmpList[biggerIndex]
//             tmpList.splice(biggerIndex, 1)
//             nums.length = len
//             nums.push(...tmpList)
//             return nums
//         }
//     }
//     return nums.sort((a, b) => a - b)
// }

// 优化
const nextPermutation = nums => {
    let len = nums.length
    while (len) {
        len--
        if (nums[len] > nums[len - 1]) {
            for (let i = nums.length - 1; i > 0; i--) {
                if (nums[i] > nums[len - 1]) {
                    [nums[i], nums[len - 1]] = [nums[len - 1], nums[i]]
                    const list = nums.slice(len).reverse()
                    nums.length = len
                    nums.push(...list)
                    break
                }
            }
            return nums
        }
    }
    return nums.sort((a, b) => a - b)
}

console.log(nextPermutation([1, 3, 2]))
console.log(nextPermutation([1, 2, 3]))
console.log(nextPermutation([3, 2, 1]))
console.log(nextPermutation([1, 1, 5]))
console.log(nextPermutation([1]))
console.log(nextPermutation([]))
console.log(nextPermutation([1, 3, 5, 4]))
console.log(nextPermutation([1, 3, 2]))
console.log(nextPermutation([1, 3, 2, 7, 6, 5, 1]))