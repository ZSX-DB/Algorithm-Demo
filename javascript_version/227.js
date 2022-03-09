// const calculate = s => {
//     const notNum = ['+', '-', '*', '/']
//     s = s.replace(/ /g, '') + '+'
//     let left = 0
//     let right = 0
//     let list = []
//     for (let i = 0; i < s.length; i++) {
//         if (notNum.includes(s[i])) {
//             const str = s.substring(left, right)
//             if (str !== '') list.push(Number(str))
//             list.push(s[i])
//             left = right
//             left++
//         }
//         right++
//     }
//     list.pop()
//
//     const arr = []
//     // 先处理乘除法
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] === '*' || list[i] === '/') {
//             const tmp = arr.pop()
//             arr.push(Math.floor(list[i] === '*' ? tmp * list[i + 1] : tmp / list[i + 1]))
//             i++
//         } else {
//             arr.push(list[i])
//         }
//     }
//
//     let res = arr[0]
//     for (let i = 2; i < arr.length; i += 2) {
//         arr[i - 1] === '+' ? res += arr[i] : res -= arr[i]
//     }
//
//     return res
// }

const calculate = s => {
    s = `${s}+0`.replace(/ /g, '')
    const len = s.length
    const stack = []
    let preSign = '+'
    let num = 0

    for (let i = 0; i < len; i++) {
        if (!isNaN(Number(s[i]))) {
            num = num * 10 + Number(s[i])
        } else if (isNaN(Number(s[i]))) {
            switch (preSign) {
                case '+':
                    stack.push(num)
                    break
                case '-':
                    stack.push(-num)
                    break
                case '*':
                    stack.push(stack.pop() * num)
                    break
                default:
                    const val = stack.pop() / num
                    stack.push(val > 0 ? Math.floor(val) : Math.ceil(val))
            }
            preSign = s[i]
            num = 0
        }
    }
    return stack.reduce((pre, cur) => pre + cur)
}

console.log(calculate("14-3/2"))
console.log(calculate('3+24*2* 3 '))
console.log(calculate('5 - 3'))
console.log(calculate(' 3/2 '))
console.log(calculate(' 3+5 / 2 '))
