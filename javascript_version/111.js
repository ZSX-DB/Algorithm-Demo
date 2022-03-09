// const minDepth = root => {
//     if (root === null) return 0
//     const collect = []
//     const dfs = (node, deep) => {
//         if (node.left === null && node.right === null) {
//             collect.push(deep)
//             return
//         }
//         if (node.left) dfs(node.left, deep + 1)
//         if (node.right) dfs(node.right, deep + 1)
//     }
//     dfs(root, 1)
//     return Math.min(...collect)
// }

const minDepth = root => {
    if (root === null) return 0
    if (root.left === null) return minDepth(root.right) + 1
    if (root.right === null) return minDepth(root.left) + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

const root = {
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

console.log(minDepth(root))
console.log(minDepth(null))
