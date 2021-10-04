const findTilt = root => {
    let res = 0
    const dfs = node => {
        if(node === null) return 0
        const left = dfs(node.left)
        const right = dfs(node.right)
        res += Math.abs(left - right)
        return node.val + left + right
    }
    dfs(root)
    return res
}

const tree1 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

console.log(findTilt(tree1))

