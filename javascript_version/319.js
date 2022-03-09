// 对于数据量大的会超时
// const bulbSwitch = n => {
//     const switchList = new Array(n).fill(0)
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             let j = 0
//             while (j < n) {
//                 switchList[j + i - 1] = (switchList[j + i - 1] === 1 ? 0 : 1)
//                 j += i
//             }
//         } else {
//             let j = 0
//             while (j < (n - n % i)) {
//                 switchList[j + i - 1] = (switchList[j + i - 1] === 1 ? 0 : 1)
//                 j += i
//             }
//         }
//     }
//     return switchList.filter(item => item === 1).length
// }

// 规律
const bulbSwitch = n => Math.floor(Math.sqrt(n))

console.log(bulbSwitch(1))
console.log(bulbSwitch(2))
console.log(bulbSwitch(3))
console.log(bulbSwitch(4))
console.log(bulbSwitch(9))
