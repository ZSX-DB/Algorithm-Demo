/**
 * 509、斐波那契数
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
 * 链接：https://leetcode-cn.com/problems/fibonacci-number/
 */

const fib = n => {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(2), fib(4), fib(3))
