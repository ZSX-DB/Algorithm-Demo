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

// 使用pre来保存前驱节点
// const minDiffInBST = root => {
//     let pre = -1
//     let res = Infinity
//     const iterate = node => {
//         if(node === null) return
//         iterate(node.left)
//         if(pre !== -1){
//             res = Math.min(res, node.val - pre)
//             pre = node.val
//         }else {
//             pre = node.val
//         }
//         iterate(node.right)
//     }
//     iterate(root)
//     return res
// }

console.log(minDiffInBST(binaryTree))
