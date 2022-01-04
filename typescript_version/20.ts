// const isValid = (s: string): boolean => {
//     while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
//         s = s.replace('()', '').replace('{}', '').replace('[]', '')
//     }
//     return s.length === 0
// }

const isValid = (s: string): boolean => {
    const stack: string[] = []
    const end = (): string | undefined => stack[stack.length - 1]
    for (const sign of s) {
        if ((sign === ')' && end() === '(') || (sign === ']' && end() === '[') || (sign === '}' && end() === '{')) {
            stack.pop()
        } else {
            stack.push(sign)
        }
    }
    return stack.length === 0
}
