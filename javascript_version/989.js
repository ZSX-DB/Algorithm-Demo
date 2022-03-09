// 逐位相加
// const addToArrayForm = (A, K) => {
//     K = String(K).split('').map(item=>Number(item))
//     const aLen = A.length
//     const kLen = K.length
//     let len = 0
//     if (aLen >= kLen) {
//         len = aLen
//         for (let i = 0; i < aLen - kLen; i++) {
//             K.unshift(0)
//         }
//     } else {
//         len = kLen
//         for (let i = 0; i < kLen - aLen; i++) {
//             A.unshift(0)
//         }
//     }
//     let prev = 0
//     const list = []
//     for (let i = len - 1; i >= 0; i--) {
//         const tmp = A[i] + K[i] + prev
//         if (tmp >= 10) {
//             prev = 1
//             list.push(tmp % 10)
//         } else {
//             prev = 0
//             list.push(tmp)
//         }
//     }
//     if (prev > 0) list.push(prev)
//     return list.reverse()
// }


// BigInt 避免溢出
// const addToArrayForm = (A, K) => String(BigInt(A.join('')) + BigInt(K)).split('').map(item => Number(item))

const addToArrayForm = (A, K) => {
    let len = A.length - 1
    const list = []
    while (len>=0 || K ) {
        K += (A[len] || 0)
        list.push(K % 10)
        K = Math.floor(K / 10)
        len--
    }
    return list.reverse()
}


console.log(addToArrayForm([1, 2, 0, 0], 34))
console.log(addToArrayForm([2, 7, 4], 181))
console.log(addToArrayForm([2, 1, 5], 806))
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1))

// 边界值
console.log(addToArrayForm([5, 4, 3], 0))
console.log(addToArrayForm([0], 0))
console.log(addToArrayForm([9], 9999))
console.log(addToArrayForm([9], 1))