// const isValidSerialization = preorder => {
//     preorder = preorder.split(',')
//
//     const len = preorder.length
//     if (preorder[0] === '#') return len === 1
//     if (len === 2) return false
//
//     const stack = [preorder[0], preorder[1]]
//     for (let i = 2; i < len; i++) {
//         stack.push(preorder[i])
//         while (stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#') {
//             if (stack.length === 2) return false
//             stack.pop()
//             stack.pop()
//             stack.pop()
//             stack.push('#')
//         }
//     }
//     return stack.length === 1 && stack[0] === '#'
// }

// 出度入度(所有节点的入度之和等于出度之和)
// 每个空节点（ "#" ）会提供 0 个出度和 1 个入度。
// 每个非空节点会提供 2 个出度和 1 个入度（根节点的入度是 0）
const isValidSerialization = preorder => {
    preorder = preorder.split(',')

    let diff = 1

    for (const item of preorder) {
        diff--
        if (diff < 0) return false
        if (item !== '#') diff += 2
    }

    return diff === 0
}

console.log(isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#'))
console.log(isValidSerialization('9,#,#,1'))
console.log(isValidSerialization('1,#'))
console.log(isValidSerialization('#'))
console.log(isValidSerialization('1,#,#,#,#'))
console.log(isValidSerialization('#,#,#'))
console.log(isValidSerialization('9,3,4,#,#,1,#,#,#,2,#,6,#,#'))
