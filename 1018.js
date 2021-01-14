/**
 * 1018、可被 5 整除的二进制前缀
 * 给定由若干0和1组成的数组 A。我们定义N_i：从A[0] 到A[i]的第 i个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
 * 返回布尔值列表answer，只有当N_i可以被 5整除时，答案answer[i] 为true，否则为 false。
 * 链接：https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/
 */


// 可能是parseInt无法转换过大数
// const prefixesDivBy5 = A => A.map((item, index) => parseInt(A.slice(0, index + 1).join(''), 2) % 5 === 0)


/**
 * 左移
 * 3<<2
 * 000011->001100
 */

// 能否被5整除只与十进制最后一位是0还是5有关
// 下一个二进制前缀对应的十进制整数 = 上一次的结果左移一位（乘以2）的结果 + 这次的A[i]（0或者1，正好对应十进制的0或者1）的结果
// const prefixesDivBy5 = A => {
//     let prefix = 0
//     const list = []
//     const len = A.length
//     for (let i = 0; i < len; i++) {
//         prefix = ((prefix << 1) + A[i]) % 5
//         list.push(prefix === 0)
//     }
//     return list
// }


// 状态机
const prefixesDivBy5 = A => {
    // 状态转移函数, 上一次的结果乘以2 + 这次的A[i] % 5
    // 因为A[i]必为0 或 1, 因此使用二维数组
    // 假设state为2, 遇到0则2 * 2 % 5 = 4 对应着map[2][0], 遇到1则(2 * 2 + 1) % 5 = 0, 对应着map[2][1]
    let map = [[0, 1], [2, 3], [4, 0], [1, 2], [3, 4]]
    let state = 0
    const list = []
    for (let i = 0; i < A.length; i++) {
        state = map[state][A[i]]
        list.push(state === 0)
    }
    return list
}

console.log(prefixesDivBy5([0, 1, 1]))
console.log(prefixesDivBy5([1, 1, 1]))
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]))
console.log(prefixesDivBy5([1, 1, 1, 0, 1]))
console.log(prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1]))