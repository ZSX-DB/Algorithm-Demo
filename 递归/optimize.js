/**
 * 尾递归
 */


// function fibonacci(n,acc,cal) {
//     if (n === 1) return acc
//     if (n === 2) return cal
//     return fibonacci(n-1,cal,acc+cal)
// }
//
// console.time('1')
// console.log(fibonacci(40,1,1))
// console.timeEnd('1')

function factorial(n) {
    if (n === 0) return 1
    return n * factorial(n - 1)
}

function factorialOptimize(n, result) {
    if (n === 0) return result
    return factorialOptimize(n-1, n * result)
}

console.time('未优化的阶乘')
console.log(factorial(5))
console.timeEnd('未优化的阶乘')


console.time('优化后的阶乘')
console.log(factorialOptimize(5, 1))
console.timeEnd('优化后的阶乘')