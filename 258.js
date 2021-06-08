// const addDigits = num => {
//     let str = String(num)
//     while (str.length > 1) {
//         str = String(str.split('').map(Number).reduce((sum, curNum) => sum + curNum, 0))
//     }
//     return Number(str)
// }

const addDigits = num => (num - 1) % 9 + 1

console.log(addDigits(38))
