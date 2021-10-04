const binaryTree = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 7,
        left: null,
        right: null
    }
}

// 获取节点重新生成二叉树
// const increasingBST = root => {
//     const list = []
//     const tree = {}
//     let copy = tree
//     const traverse = node => {
//         if (node.left) traverse(node.left)
//         list.push(node.val)
//         if (node.right) traverse(node.right)
//     }
//     traverse(root)
//     for (let i = 0; i < list.length; i++) {
//         copy.val = list[i]
//         copy.left = null
//         copy.right = (i === list.length - 1 ? null : {})
//         copy = copy.right
//     }
//     return tree
// }

const increasingBST = root => {
    const dummy = {}
    let copy = dummy
    const traverse = node => {
        if (node.left) traverse(node.left)
        node.left = null
        copy.right = node
        copy = copy.right
        if (node.right) traverse(node.right)
    }
    traverse(root)
    return dummy.right
}

console.log(increasingBST(binaryTree))
