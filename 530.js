const getMinimumDifference = root => {
    let list = []
    const getVal = node => {
        if (node === null) return
        getVal(node.left)
        list.push(node.val)
        getVal(node.right)
    }
    getVal(root)
    return Math.min(...list.map((item, idx) => item - list[idx - 1]).filter(item => !isNaN(item)))
}
