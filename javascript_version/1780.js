const checkPowersOfThree = n => {
    for (const ch of n.toString(3)) {
        if (ch !== '0' && ch !== '1') return false
    }
    return true
}

// const checkPowersOfThree = n => {
//     let power = 15
//     while (n > 0 && power > 0) {
//         power--
//         if (n >= 3 ** power) n -= 3 ** power
//     }
//     return n === 0
// }

console.log(checkPowersOfThree(12))
console.log(checkPowersOfThree(91))
console.log(checkPowersOfThree(21))
