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
 * 迭代方式前序遍历
 * @param root
 * @returns {[]}
 */
const preorder = root => {
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

console.log(preorder(binaryTree))
