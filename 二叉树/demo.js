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

// const binaryTree = {
//     val: 7,
//     left: {
//         val: 3,
//         left: {
//             val: 4,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 8,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 15,
//         left: {
//             val: 9,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 20,
//             left: null,
//             right: null
//         }
//     }
// }

/**
 * 递归方式遍历二叉树
 * @param root
 * @returns {[]}
 */

// 前序遍历
const preorderTraversal = root => {
    const list = []
    const iterate = root => {
        if (root === null) return
        list.push(root.val)
        iterate(root.left)
        iterate(root.right)
    }
    iterate(root)
    return list
}

// 中序遍历
const inorderTraversal = root => {
    const list = []
    const iterate = root => {
        if (root === null) return
        iterate(root.left)
        list.push(root.val)
        iterate(root.right)
    }
    iterate(root)
    return list
}

// 后序遍历
const postorderTraversal = root => {
    const list = []
    const iterate = root => {
        if (root === null) return
        iterate(root.left)
        iterate(root.right)
        list.push(root.val)
    }
    iterate(root)
    return list
}

console.log('前序遍历', preorderTraversal(binaryTree))
console.log('中序遍历', inorderTraversal(binaryTree))
console.log('后序遍历', postorderTraversal(binaryTree))

const f1 = root => {
    const stack = [root]
    const list = []
    while (stack.length) {
        const cur = stack.pop()
        list.push(cur.val)
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
    }
    return list
}

console.log(f1(binaryTree))
