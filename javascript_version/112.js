const hasPathSum = (root, targetSum) => {
    if (root === null) return false
    const collect = []
    const helper = (node, val) => {
        if (node.left === null && node.right === null) {
            collect.push(val)
            return
        }
        node.left && helper(node.left, val + node.left.val)
        node.right && helper(node.right, val + node.right.val)
    }
    helper(root, root.val)
    return collect.includes(targetSum)
}

const root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
}

console.log(hasPathSum(root, 2))
