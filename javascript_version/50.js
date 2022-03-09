// 内置方法，不符合题意
// const myPow = (x, n) => Math.pow(x, n)
// const myPow = (x, n) => x ** n

// 递归版本
// const myPow = (x, n) => {
//     if (n === 0) return 1
//     const half = Math.floor(n > 0 ? n / 2 : Math.abs(n) / 2)
//     const num = myPow(x, half)
//     if (n > 0) return n % 2 ? num * num * x : num * num
//     if (n < 0) return n % 2 ? 1 / (num * num * x) : 1 / (num * num)
// }

// 迭代版本，看贡献数
const myPow = (x, n) => {
    const quickMul = (x, n) => {
        let res = 1
        let copyX = x
        while (n) {
            if (n % 2) res *= copyX
            copyX *= copyX
            n = Math.floor(n / 2)
        }
        return res
    }
    return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n)
}

// 非函数调用版本
// const myPow = (x, n) => {
//     const flag = n >= 0
//     n = Math.abs(n)
//     let res = 1
//     let copyX = x
//     while (n > 0) {
//         if (n % 2) res *= copyX
//         copyX *= copyX
//         n = Math.floor(n / 2)
//     }
//     return flag ? res : 1 / res
// }

console.log(myPow(2, 5))
console.log(myPow(2, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))
console.log(myPow(2.00000, -2147483648))
