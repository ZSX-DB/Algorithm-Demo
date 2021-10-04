// 模拟相加
const addBinary = (a, b) => {
    while (a.length !== b.length) {
        a.length > b.length ? b = `0${b}` : a = `0${a}`
    }
    const operate = [
        ['0', 0], ['1', 0], ['0', 1], ['1', 1]
    ]
    let res = ''
    let flag = 0
    for (let i = a.length - 1; i >= 0; i--) {
        const sum = Number(a[i]) + Number(b[i]) + flag
        res = operate[sum][0] + res
        flag = operate[sum][1]
    }
    if (flag !== 0) res = flag + res
    return res
}

// 转 10 再转 2，可能会溢出，解决方案：使用 BigInt
// BigInt 的构造函数只有一个参数，所以需要加上这个 0b 或 0B 来表明这是一个代表二进制数的字符串
// const addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)

console.log(addBinary('11', '1'))
console.log(addBinary('11', '01'))
console.log(addBinary('1010', '1011'))

