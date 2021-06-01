// const balancedStringSplit = s => {
//     let flag = 1
//     let count = 0
//     s.split('').map(ch => ({ L: 2, R: 0.5 }[ch])).forEach(num => {
//         flag *= num
//         if (flag === 1) count++
//     })
//     return count
// }

const balancedStringSplit = s => {
    let flag = 0
    let count = 0
    for (const ch of s) {
        ch === 'R' ? flag++ : flag--
        count += (flag === 0 ? 1 : 0)
    }
    return count
}

console.log(balancedStringSplit('RLRRLLRLRL'))
