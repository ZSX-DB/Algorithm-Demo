const root = {
    val: 1,
    left: {
        val: 2,
        left: {val: 3, left: null, right: null},
        right: {val: 4, left: null, right: null}
    },
    right: {
        val: 2,
        left: {val: 4, left: null, right: null},
        right: {val: 3, left: null, right: null}
    }
}

// 如果是对称二叉数，将右测节点反转，将与左侧一样
// const isSymmetric = root => {
//     if (root === null || (root.left === null && root.right === null)) return true
//     if ((root.left !== null && root.right === null) || (root.left === null && root.right !== null)) return false
//     const handleRight = root => {
//         [root.left, root.right] = [root.right, root.left]
//         if (root.left) handleRight(root.left)
//         if (root.right) handleRight(root.right)
//     }
//     handleRight(root.right)
//     return JSON.stringify(root.left) === JSON.stringify(root.right)
// }

const isSymmetric = root => {
    const check = (p, q) => {
        if (p === null && q === null) return true
        if ((p === null && q !== null) || (p !== null && q === null)) return false
        return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
    }
    return check(root, root)
}

console.log(isSymmetric(root))
