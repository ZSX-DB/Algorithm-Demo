const binaryTree = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: null,
        right: null
    }
}


// const minDiffInBST = root => {
//     const list = []
//     const getVal = node => {
//         list.push(node.val)
//         if (node.left) getVal(node.left)
//         if (node.right) getVal(node.right)
//     }
//     getVal(root)
//     list.sort((a, b) => a - b)
//     const res = []
//     for (let i = 1; i < list.length; i++) {
//         res.push(list[i] - list[i - 1])
//     }
//     return Math.min(...res)
// }

// 中序遍历
const minDiffInBST = root => {
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

console.log(minDiffInBST(binaryTree))
