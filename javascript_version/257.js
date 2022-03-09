// DFS
// const binaryTreePaths = root => {
//     if (root === null) return []
//     const res = []
//
//     const dfs = (root, str) => {
//         if(root.left) dfs(root.left, `${str}->${root.left.val}`)
//         if(root.right) dfs(root.right, `${str}->${root.right.val}`)
//         if(root.left === null && root.right === null) res.push(str)
//     }
//
//     dfs(root, `${root.val}`)
//     return res
// }

// BFS
const binaryTreePaths = root => {
    if (root === null) return []
    const paths = []
    const nodeQueue = [root]
    const pathQueue = [root.val]

    while (nodeQueue.length) {
        const node = nodeQueue.shift()
        const path = pathQueue.shift()

        if (node.left === null && node.right === null) {
            paths.push(path)
        } else {
            if (node.left) {
                nodeQueue.push(node.left)
                pathQueue.push(`${path}->${node.left.val}`)
            }
            if (node.right) {
                nodeQueue.push(node.right)
                pathQueue.push(`${path}->${node.right.val}`)
            }
        }
    }

    return paths.map(item => String(item))

}

const binaryTree1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

const binaryTree2 = {
    val: 3,
    left: null,
    right: null
}

const binaryTree3 = {
    val: 3,
    left: {
        val: 11,
        left: null,
        right: null
    },
    right: null
}

const binaryTree4 = null

console.log(binaryTreePaths(binaryTree1))
console.log(binaryTreePaths(binaryTree2))
console.log(binaryTreePaths(binaryTree3))
console.log(binaryTreePaths(binaryTree4))
