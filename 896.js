// const isMonotonic = A => {
//     const S = JSON.stringify(A)
//     return JSON.stringify(JSON.parse(S).sort((a, b) => a - b)) === S || JSON.stringify(JSON.parse(S).sort((a, b) => b - a)) === S
// }

// const isMonotonic = A => {
//     const len = A.length
//     if (len <= 2) return true
//     if (A[len - 1] > A[0]) {
//         for (let i = 1; i < len; i++) {
//             if (A[i] < A[i - 1]) return false
//         }
//     } else if (A[len - 1] < A[0]) {
//         for (let i = 1; i < len; i++) {
//             if (A[i] > A[i - 1]) return false
//         }
//     } else {
//         for (let i = 1; i < len; i++) {
//             if (A[i] !== A[i - 1]) return false
//         }
//     }
//     return true
// }

const isMonotonic = A => {
    let isUp = true
    let isDown = true
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) isDown = false
        if (A[i] < A[i - 1]) isUp = false
    }
    return isUp || isDown
}

console.log(isMonotonic([]))
console.log(isMonotonic([1]))
console.log(isMonotonic([1, 2]))
console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([5, 4, 7, 2, 8]))
console.log(isMonotonic([6, 5, 4, 4]))
