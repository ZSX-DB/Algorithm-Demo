const isValidSerialization = preorder => {
    preorder = preorder.split(',')

    const len = preorder.length
    if (preorder[0] === '#') return len === 1
    if (len === 2) return false


    const stack = [preorder[0], preorder[1]]
    for (let i = 2; i < len; i++) {
        stack.push(preorder[i])
        while (stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#') {
            if (stack.length === 2) return false
            stack.pop()
            stack.pop()
            stack.pop()
            stack.push('#')
        }
    }

    return stack.length === 1 && stack[0] === '#'

}

console.log(isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#'))
console.log(isValidSerialization('9,#,#,1'))
console.log(isValidSerialization('1,#'))
console.log(isValidSerialization('#'))
console.log(isValidSerialization('1,#,#,#,#'))
console.log(isValidSerialization('#,#,#'))
console.log(isValidSerialization('9,3,4,#,#,1,#,#,#,2,#,6,#,#'))
