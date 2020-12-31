/**
 * 1046、最后一块石头的重量
 * 有一堆石头，每块石头的重量都是正整数。
 * 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 * 链接：https://leetcode-cn.com/problems/last-stone-weight/
 */

// 排序法
// const lastStoneWeight = stones => {
//     stones.sort((a, b) => a - b)
//     while (stones.length > 1) {
//         const diff = stones.pop() - stones.pop()
//         if (diff > 0) {
//             stones.push(diff)
//             stones.sort((a, b) => a - b)
//         }
//     }
//     return stones[0] || 0
// }

// 非排序法
const lastStoneWeight = stones => {
    while (stones.length > 1) {
        const fm = Math.max(...stones)
        const fmIndex = stones.indexOf(fm)
        stones.splice(fmIndex, 1)

        const sm = Math.max(...stones)
        const smIndex = stones.indexOf(sm)
        fm === sm ? stones.splice(smIndex, 1) : stones[smIndex] = fm - sm
    }
    return stones[0] || 0
}

console.log(lastStoneWeight([3]))
console.log(lastStoneWeight([4, 4]))
console.log(lastStoneWeight([3, 5]))
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))

