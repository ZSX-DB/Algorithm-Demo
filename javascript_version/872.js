const leafSimilar = (root1, root2) => {
    const list1 = []
    const list2 = []
    const dfs = (node, list) => {
        if (node.left === null && node.right === null) {
            list.push(node.val)
            return
        }
        node.left && dfs(node.left, list)
        node.right && dfs(node.right, list)
    }
    dfs(root1, list1)
    dfs(root2, list2)
    return JSON.stringify(list1) === JSON.stringify(list2)
}

const bt1 = {
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

const bt2 = {
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
            val: 9,
            left: null,
            right: null
        }
    }
}

console.log(leafSimilar(bt1, bt2))
