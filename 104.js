// 深度优先遍历
// const maxDepth = root => {
//     if (root === null) return 0
//     let max = 1
//     const dfs = (root, depth) => {
//         max = Math.max(max, depth)
//         root.left && dfs(root.left, depth + 1)
//         root.right && dfs(root.right, depth + 1)
//     }
//     dfs(root, 1)
//     return max
// }

// DFS写法优化
// const maxDepth = root => {
//     if (root === null) return 0
//     const leftDepth = maxDepth(root.left)
//     const rightDepth = maxDepth(root.right)
//     return Math.max(leftDepth, rightDepth) + 1
// }

// 广度优先遍历BFS
const maxDepth = root => {
    if (root === null) return 0
    const queue = [root]

    let depth = 1
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        if (queue.length) depth++
    }

    return depth
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

console.log(maxDepth(binaryTree1))
console.log(maxDepth(binaryTree2))
console.log(maxDepth(binaryTree3))
console.log(maxDepth(binaryTree4))
