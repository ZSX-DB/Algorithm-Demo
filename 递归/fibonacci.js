/**
 * 以斐波那契数列为例，演示递归优化
 */

const fib = n => {
    if (n <= 2) return [0, 1, 1][n]
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(3), fib(4), fib(30))

// 空间换时间，但由于不需要调用栈，空间复杂度在n比较大的情况下可能更小
const spaceFib = n => {
    const list = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        list[i] = list[i - 1] + list[i - 2]
    }
    return list[n]
}
console.log(spaceFib(3), spaceFib(4), spaceFib(30))

// 尾递归优化
const tailFib = (n, first, second) => {
    if (n <= 2) {
        return [0, 1, 1][n]
    } else if (n === 3) {
        return first + second
    } else {
        return tailFib(n - 1, second, first + second)
    }
}

console.log(tailFib(3, 1, 1), tailFib(4, 1, 1), tailFib(30, 1, 1))

/**
 * 阶乘
 */

// 阶乘的尾递归优化
const factorial = (n, result) => {
    if (n === 0) return result
    return factorial(n - 1, n * result)
}

console.log(factorial(5, 1), factorial(6, 1))

// 如果能写成尾递归，那基本能迭代方式写出
const fact = n => {
    const list = [1]
    for (let i = 1; i <= n; i++) {
        list[i] = i * list[i-1]
    }
    return list[n]
}

console.log(fact(5), fact(6))
