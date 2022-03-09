// const isHappy = n => {
//     const getSum = num => String(num).split('').map(Number).reduce((pre, cur) => pre + cur ** 2, 0)
//     let slow = n
//     let fast = getSum(n)
//     while (slow !== fast) {
//         slow = getSum(slow)
//         fast = getSum(getSum(fast))
//     }
//     return fast === 1
// }

const isHappy = n => {
    const getSum = num => String(num).split('').map(Number).reduce((pre, cur) => pre + cur ** 2, 0)
    const map = new Map()
    while (true) {
        const val = getSum(n)
        if (val === 1) return true
        if (map.has(val)) return false
        n = val
        map.set(val, true)
    }
}


console.log(isHappy(19))
console.log(isHappy(2))
