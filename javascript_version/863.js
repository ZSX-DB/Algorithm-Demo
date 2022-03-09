const distanceK = (root, target, k) => {
    const parents = new Map()
    const ans = []
    const findParents = node => {
        if (node.left) {
            parents.set(node.left.val, node)
            findParents(node.left)
        }
        if (node.right) {
            parents.set(node.right.val, node)
            findParents(node.right)
        }
    }
    const findAns = (node, from, depth) => {
        if (node == null) return
        if (depth === k) {
            ans.push(node.val)
            return
        }
        if (node.left !== from) {
            findAns(node.left, node, depth + 1)
        }
        if (node.right !== from) {
            findAns(node.right, node, depth + 1)
        }
        if (parents.get(node.val) !== from) {
            findAns(parents.get(node.val), node, depth + 1)
        }
    }
    findParents(root)
    findAns(target, null, 0)
    return ans
}
