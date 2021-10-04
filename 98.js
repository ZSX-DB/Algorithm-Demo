// 分别获取每个节点的左子树和右子树，判断是否符合，不符合返回 false, 效率低
// const isValidBST = root => {
//     const getChildVal = (node, collect) => {
//         collect.push(node.val)
//         node.left && getChildVal(node.left, collect)
//         node.right && getChildVal(node.right, collect)
//     }
//     const queue = [root]
//     while (queue.length) {
//         const node = queue.shift()
//         if (node.left) {
//             const leftVals = []
//             getChildVal(node.left, leftVals)
//             if (leftVals.some(item => item >= node.val)) return false
//             queue.push(node.left)
//         }
//         if (node.right) {
//             const rightVals = []
//             getChildVal(node.right, rightVals)
//             if (rightVals.some(item => item <= node.val)) return false
//             queue.push(node.right)
//         }
//     }
//     return true
// }

// 二叉搜索树中序遍历为升序
// const isValidBST = root => {
//     const collect = []
//     const dfs = node => {
//         node.left && dfs(node.left, collect)
//         collect.push(node.val)
//         node.right && dfs(node.right, collect)
//     }
//     dfs(root)
//     for (let i = 1; i < collect.length; i++) {
//         if (collect[i] <= collect[i - 1]) return false
//     }
//     return true
// }

const isValidBST = root => {
    const helper = (node, lower, upper) => {
        if(node === null) return true
        if(node.val <= lower || node.val >= upper) return false
        return helper(node.left, lower, node.val) && helper(node.right, node.val, upper)
    }
    return helper(root, -Infinity, Infinity)
}

const tree1 = {
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
}

const tree2 = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 4,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
}

console.log(isValidBST(tree1));
console.log(isValidBST(tree2));