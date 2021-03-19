/**
 * 记录调用栈
 */
const callStack = []

Function.prototype.before = function () {
    const self = this
    return function () {
        const params = []
        Object.values(JSON.parse(JSON.stringify(arguments))).forEach(item => {
            params.push(item)
        })
        callStack.push({
            callName: self.name,
            params: params
        })
        return self.call(this, ...arguments)
    }
}

let mul = (x, y) => x * y
mul = mul.before()
console.log('The mul result is', mul(3, 7))
console.log('The mul result is', mul(6, 9))
console.log('The mul result is', mul(2, 2))

// 更好的设置方式
const add = (x, y) => {
    let add = (x, y) => x + y
    add = add.before()
    return add(x, y)
}

console.log('The add result is', add(3, 5))


console.log('调用栈', callStack)

