// const buildTree = (preorder, inorder) => {
//     if (preorder.length === 0) return null
//     const mid = inorder.indexOf(preorder[0])
//     return {
//         val: preorder[0],
//         left: buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)),
//         right: buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
//     }
// }

// 截取数组消耗性能，传递索引即可
const buildTree = (preorder, inorder) => {
    const map = new Map()
    inorder.forEach((item, idx) => {
        map.set(item, idx)
    })
    const helper = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd) return null
        const root = {
            val: preorder[preStart]
        }
        const mid = map.get(preorder[preStart])
        // 左子树节点数
        const leftNum = mid - inStart
        root.left = helper(preStart + 1, preStart + leftNum, inStart, mid - 1)
        root.right = helper(preStart + leftNum + 1, preEnd, mid + 1, inEnd)
        return root
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
