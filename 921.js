// const minAddToMakeValid = s => {
//     const stack = []
//     for (const ch of s) {
//         if (stack[stack.length - 1] === '(' && ch === ')') {
//             stack.pop()
//         } else {
//             stack.push(ch)
//         }
//     }
//     return stack.length
// }

// 简化
// const minAddToMakeValid = s => s.split('').reduce((stack, ch) => {
//     stack[stack.length - 1] === '(' && ch === ')' ? stack.pop() : stack.push(ch)
//     return stack
// }, []).length

const minAddToMakeValid = s => {
    while(s.includes('()')){
        s = s.replace('()', '')
    }
    return s.length
}


console.log(minAddToMakeValid('()))(('))
console.log(minAddToMakeValid('())'))
console.log(minAddToMakeValid('()'))
