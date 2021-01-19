// const plusOne = digits => {
//     const len = digits.length
//     const lastVal = digits[len - 1]
//     if (lastVal !== 9) {
//         digits[len - 1] = lastVal + 1
//     } else {
//         for (let i = len - 1; i >= 0; i--) {
//             if (digits[i] === 9) {
//                 digits[i] = 0
//                 if (i === 0) digits.unshift(1)
//             } else {
//                 digits[i] += 1
//                 break
//             }
//         }
//     }
//
//     return digits
// }

const plusOne = digits => {
    const len = digits.length
    const lastVal = digits[len - 1]
    if (lastVal !== 9) {
        digits[len - 1] = lastVal + 1
    } else {
        for (let i = len - 1; i >= 0; i--) {
            if (digits[i] !== 9) {
                digits[i] += 1
                break
            } else {
                digits[i] = 0
                if (i === 0) digits.unshift(1)
            }
        }
    }

    return digits
}

console.log(plusOne([9, 9]))
console.log(plusOne([7, 9, 9]))
console.log(plusOne([9]))
console.log(plusOne([0]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
