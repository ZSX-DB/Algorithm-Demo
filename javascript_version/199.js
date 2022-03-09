// dfs
// const rightSideView = root => {
//     const list = []
//     let deep = 0
//     const dfs = (node, index) => {
//         deep = Math.max(deep, index)
//         if (node === null) return
//         list.push({
//             index,
//             val: node.val
//         })
//         dfs(node.left, index + 1)
//         dfs(node.right, index + 1)
//     }
//     const getLastItem = arr => arr[arr.length - 1]
//     dfs(root, 0)
//     return new Array(deep).fill(0).map((_, idx) => idx).map(cur => getLastItem(list.filter(item => item.index === cur)).val)
// }

const rightSideView = root => {
    if(root === null) return []
    const list = []
    const queue = [root]
    let len = 1
    while (len) {
        list.push(queue[len - 1].val)
        for (let i = 0; i < len; i++) {
            const shift = queue.shift()
            if(shift.left) queue.push(shift.left)
            if(shift.right) queue.push(shift.right)
        }
        len = queue.length
    }
    return list
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

const tree2 = {
    val: 7,
    left: {
        val: 3,
        left: null,
        right: {
            val: 11,
            left: {
                val: 13,
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        val: 15,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 20,
            left: null,
            right: null
        }
    }
}

console.log(rightSideView(null))
console.log(rightSideView(tree1))
console.log(rightSideView(tree2))
