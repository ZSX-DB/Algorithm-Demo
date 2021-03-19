// const evalRPN = tokens => {
//     tokens = tokens.map(item => isNaN(Number(item)) ? item : Number(item))
//     const stack = []
//     for (const item of tokens) {
//         switch (item) {
//             case '+':
//                 stack.push(stack.pop() + stack.pop())
//                 break
//             case '-':
//                 const subtrahend = stack.pop()
//                 const minuend = stack.pop()
//                 stack.push(minuend - subtrahend)
//                 break
//             case '*':
//                 stack.push(stack.pop() * stack.pop())
//                 break
//             case '/':
//                 const divisor = stack.pop()
//                 const dividend = stack.pop()
//                 stack.push(dividend / divisor > 0 ? Math.floor(dividend / divisor) : Math.ceil(dividend / divisor))
//                 break
//             default:
//                 stack.push(item)
//         }
//     }
//     return stack[0]
// }

const evalRPN = tokens => {
    const sign = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => Math.trunc(x / y)
    }
    const stack = []
    for(const item of tokens){
        if(sign.hasOwnProperty(item)){
            const y = stack.pop()
            const x = stack.pop()
            stack.push(sign[item](x, y))
        }else {
            stack.push(Number(item))
        }
    }
    return stack[0]
}

console.log(evalRPN(["4", "3", "-"]))
console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
