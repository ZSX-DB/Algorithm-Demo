// const kthSmallest = (root, k) => {
//     const record = []
//     const dfs = node => {
//         node.left && dfs(node.left)
//         record.push(node.val)
//         node.right && dfs(node.right)
//     }
//     dfs(root)
//     return record[k - 1]
// }

const kthSmallest = (root, k) => {
    const record = []
    const stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        record.push(root.val)
        if(record.length === k) return record[k - 1]
        root = root.right
    }
}

const root = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null
        }
    },
    right: {
        val: 4,
        left: null,
        right: null
    }
}

console.log(kthSmallest(root, 1))
