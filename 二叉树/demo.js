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

/**
 * 递归方式遍历二叉树
 * @param root
 * @returns {[]}
 */

// 前序遍历
const preorderTraversal = root => {
    const list = []
    const iterate = node => {
        if (node === null) return
        list.push(node.val)
        iterate(node.left)
        iterate(node.right)
    }
    iterate(root)
    return list
}

// 中序遍历
const inorderTraversal = root => {
    const list = []
    const iterate = node => {
        if (node === null) return
        iterate(node.left)
        list.push(node.val)
        iterate(node.right)
    }
    iterate(root)
    return list
}

// 后序遍历
const postorderTraversal = root => {
    const list = []
    const iterate = node => {
        if (node === null) return
        iterate(node.left)
        iterate(node.right)
        list.push(node.val)
    }
    iterate(root)
    return list
}

console.log('前序遍历', preorderTraversal(binaryTree))
console.log('中序遍历', inorderTraversal(binaryTree))
console.log('后序遍历', postorderTraversal(binaryTree))


