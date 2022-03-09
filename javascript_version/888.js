// sumA - a + b = sumB + a - b => b = (sumB - sumA) / 2 + a
// const fairCandySwap = (A, B) => {
//     const getSum = nums => nums.reduce((pre, cur) => pre + cur)
//     const sumDif = getSum(B) - getSum(A)
//     for(let i=0;i<A.length;i++){
//         for(let j=0;j<B.length;j++){
//             if(B[j] === (sumDif / 2 + A[i])){
//                 return [A[i], B[j]]
//             }
//         }
//     }
// }

const fairCandySwap = (A, B) => {
    const getSum = nums => nums.reduce((pre, cur) => pre + cur)
    const sumA = getSum(A)
    const sumB = getSum(B)
    const delta = (sumA - sumB) / 2
    const rec = new Set(A)
    console.log(rec)
    for (const y of B) {
        const x = y + delta
        if (rec.has(x)) return [x, y]
    }
}

console.log(fairCandySwap([1, 1], [2, 2]))
console.log(fairCandySwap([2], [1, 3]))
console.log(fairCandySwap([1, 2, 5], [2, 4]))