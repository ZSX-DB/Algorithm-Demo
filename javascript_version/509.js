/**
 * 509、斐波那契数
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
 * 链接：https://leetcode-cn.com/problems/fibonacci-number/
 */

// const fib = n => {
//     if (n === 0) return 0
//     if (n === 1) return 1
//     return fib(n - 1) + fib(n - 2)
// }

// const fib = n => {
//     const list = [0, 1]
//     if(n>=2){
//         for(let i=2;i<=n;i++){
//             list[i]= list[i-1]+list[i-2]
//         }
//     }
//     return list[n]
// }

// 通项公式(但存在浮点问题)
const fib = n => {
    const sqrt5 = Math.sqrt(5)
    const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)
    return Math.round(fibN / sqrt5)
}


console.log(fib(4))
