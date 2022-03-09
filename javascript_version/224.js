const calculate = s => {
    // 计算无括号的数组
    const calc = list => {
        let val = list[0]
        for (let i = 2; i < list.length; i += 2) {
            list[i - 1] === '+' ? val += list[i] : val -= list[i]
        }
        return val
    }
    const notNum = ['+', '-', '(', ')']

    // 添加+号可简单处理末尾为数字的情况, 如果有前置符号添加0不影响最终结果，但方便处理
    s = s.replace(/ /g, '') + '+'
    if (s[0] === '+' || s[0] === '-') s = `0${s}`

    // 双指针处理，将list转化为数字与符号组合的混合数组
    let list = []
    let left = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
        if (notNum.includes(s[i])) {
            const str = s.substring(left, right)
            if (str !== '') list.push(Number(str))
            list.push(s[i])
            left = right
            left++
        }
        right++
    }
    list.pop()

    // 不含有(可直接处理，此步可省略，如果为了效率可添加
    if (!list.includes('(')) return calc(list)

    // 栈，最终得到一个无括号的反转的混合数组
    let len = list.length
    const stack = []
    while (len) {
        len--
        if (list[len] === '(') {
            const idx = stack.lastIndexOf(')')
            const tmp = calc(stack.slice(idx + 1).reverse())
            stack.length = idx
            stack.push(tmp)
        } else {
            stack.push(list[len])
        }
    }

    return calc(stack.reverse())
}


console.log(calculate('1 - (2 -(76 - 3))+10-25'))
console.log(calculate('(1+(4+5+2)-3)+(6+8)'))
console.log(calculate('1+1'))
console.log(calculate('2-1+2'))
console.log(calculate('-(3 + (4 + 5))'))
console.log(calculate('+(3 + (4 + 5))'))
console.log(calculate('-2+1'))
