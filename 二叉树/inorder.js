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

const inorder = root => {
    const list = []
    const stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        list.push(root.val)
        root = root.right
    }
    return list
}

// morris 遍历法 O1 空间复杂度
const morrisInorder = root => {
    const list = []
    let tmp = null
    while (root) {
        if (root.left) {
            tmp = root.left
            while (tmp.right && tmp.right !== root) {
                tmp = tmp.right
            }

            if (tmp.right === null) {
                tmp.right = root
                root = root.left
            } else {
                list.push(root.val)
                tmp.right = null
                root = root.right
            }

        } else {
            list.push(root.val)
            root = root.right
        }
    }
    return list
}

console.log(inorder(binaryTree))
console.log(morrisInorder(binaryTree))
