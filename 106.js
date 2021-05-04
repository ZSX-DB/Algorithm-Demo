// const buildTree = (inorder, postorder) => {
//     if (inorder.length === 0) return null
//     const len = inorder.length
//     const mid = inorder.indexOf(postorder[len - 1])
//     return {
//         val: postorder[len - 1],
//         left: buildTree(inorder.slice(0, mid), postorder.slice(0, mid)),
//         right: buildTree(inorder.slice(mid + 1), postorder.slice(mid, len - 1))
//     }
// }

// 优化
const buildTree = (inorder, postorder) => {
    const map = new Map()
    inorder.forEach((item, idx) => {
        map.set(item, idx)
    })
    const helper = (inStart, inEnd, postStart, postEnd) => {
        if (inStart > inEnd || postStart > postEnd) return null
        const mid = map.get(postorder[postEnd])
        const leftNum = mid - inStart
        return {
            val: postorder[postEnd],
            left: helper(inStart, mid - 1, postStart, postStart + leftNum - 1),
            right: helper(mid + 1, inEnd, postStart + leftNum, postEnd - 1)
        }
    }
    return helper(0, inorder.length - 1, 0, postorder.length - 1)
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
