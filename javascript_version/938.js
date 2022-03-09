// const rangeSumBST = (root, low, high) => {
//     const list = []
//     const traverse = node => {
//         if (node.left) traverse(node.left)
//         list.push(node.val)
//         if (node.right) traverse(node.right)
//     }
//     traverse(root)
//     low = list.indexOf(low)
//     high = list.indexOf(high)
//     return list.reduce((acc, cur, idx) => (idx >= low && idx <= high) ? acc + cur : acc, 0)
// }

// 题目二叉树为搜索树，左子树所有节点小于根节点，右子树所有节点大于根节点
const rangeSumBST = (root, low, high) => {
    if (!root) return 0
    if (root.val > high) return rangeSumBST(root.left, low, high)
    if (root.val < low) return rangeSumBST(root.right, low, high)
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
}
