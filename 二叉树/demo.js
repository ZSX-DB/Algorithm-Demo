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

// 按中序输出节点
const inorderLog = root => {
    if(root === null) return
    inorderLog(root.left)
    console.log(root.val)
    inorderLog(root.right)
}

// 获取中序遍历节点
const inorderTraversal = root => {
    const list = []
    const fn = root => {
        if(root === null) return
        fn(root.left)
        list.push(root.val)
        fn(root.right)
    }

    fn(root)
    return list
}


// inorderLog(binaryTree)
console.log(inorderTraversal(binaryTree))
