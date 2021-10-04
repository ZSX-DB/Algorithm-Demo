// const numberOfMatches = n => {
//     let count = 0
//     while (n !== 1) {
//         count += Math.floor(n / 2)
//         n = Math.ceil(n / 2)
//     }
//     return count
// }

const numberOfMatches = n => n - 1

console.log(numberOfMatches(1))
console.log(numberOfMatches(2))
console.log(numberOfMatches(7))
console.log(numberOfMatches(14))
console.log(numberOfMatches(200))