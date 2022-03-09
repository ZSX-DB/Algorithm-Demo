/**
 * 134、加油站
 * 在一条环路上有N个加油站，其中第i个加油站有汽油gas[i]升。
 * 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1个加油站需要消耗汽油cost[i]升。你从其中的一个加油站出发，开始时油箱为空。
 * 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
 * 链接：https://leetcode-cn.com/problems/gas-station/
 */

// 双重循环
// const canCompleteCircuit = (gas, cost) => {
//     const len = gas.length
//     for (let i = 0; i < len; i++) {
//         if (gas[i] < cost[i]) continue
//         const gasList = gas.slice(i).concat(gas.slice(0, i))
//         const costList = cost.slice(i).concat(cost.slice(0, i))
//         let surplusGas = 0
//         for (let j = 0; j < len; j++) {
//             surplusGas += (gasList[j] - costList[j])
//             if(surplusGas < 0) break
//         }
//         if (surplusGas >= 0) return i
//     }
//     return -1
// }

// 当汽油总量大于花费量时,必有解(贪心算法)
const canCompleteCircuit = (gas, cost) => {
    let total = 0
    let surplus = 0
    let start = 0
    for (let i = 0; i < gas.length; i++) {
        const spend = gas[i] - cost[i]
        surplus += spend
        total += spend
        if (surplus < 0) {
            surplus = 0
            start = i + 1
        }
    }
    return total >= 0 ? start : -1
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
console.log(canCompleteCircuit([1, 3, 5, 233, 2], [5, 18, 30, 1, 66]))
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]))

