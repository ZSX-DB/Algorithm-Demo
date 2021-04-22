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

// 转 10 再转 2，可能会溢出，解决方案：使用 bigInt
// const addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)

console.log(addBinary('11', '1'))
console.log(addBinary('11', '01'))
console.log(addBinary('1010', '1011'))

