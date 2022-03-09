const binaryTree = {
    val: 7,
    left: {
        val: 3,
        left: null,
        right: null
    },
    right: {
        val: 15,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 20,
            left: null,
            right: null
        }
    }
}


// const inorderTraversal = root => {
//     const list = []
//     const iterate = node => {
//         if(node === null) return
//         iterate(node.left)
//         list.push(node.val)
//         iterate(node.right)
//     }
//     iterate(root)
//     return list
// }

// const inorderTraversal = root => {
//     const list = []
//     if (root === null) return list
//     const stack = [root]
//     while (stack.length) {
//         const cur = stack.pop()
//         if (typeof cur === 'number') {
//             list.push(cur)
//         } else {
//             cur.right && stack.push(cur.right)
//             stack.push(cur.val)
//             cur.left && stack.push(cur.left)
//         }
//     }
//     return list
// }

const inorderTraversal = root => {
    const list = []
    const stack = []
    while (root || stack.length){
        while (root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        list.push(root.val)
        root = root.right
    }
    return list
}

console.log(inorderTraversal(binaryTree))
console.log(inorderTraversal(null))
