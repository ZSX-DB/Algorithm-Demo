const sumOfLeftLeaves = root => {
    let result = 0
    const helper = (node, flag) => {
        if (flag && node.left === null && node.right === null) {
            result += node.val
            return
        }
        if (node.left) helper(node.left, true)
        if (node.right) helper(node.right, false)
    }
    if (root.left) helper(root.left, true)
    if (root.right) helper(root.right, false)
    return result
}

const root1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

const root2 = {
    val: 1,
    left: {
        val: 2,
        left: {val: 4, left: null, right: null},
        right: {val: 5, left: null, right: null}
    },
    right: {val: 3, left: null, right: null}
}


console.log(sumOfLeftLeaves(root1))
console.log(sumOfLeftLeaves(root2))
