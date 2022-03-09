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
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
}

const bt3 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: null
    }
}

// 自顶向下递归
// const isBalanced = root => {
//     if(root === null) return true
//     const height = root => {
//         if(root === null){
//             return 0
//         }else {
//             return Math.max(height(root.left), height(root.right)) + 1
//         }
//     }
//     return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
// }

// 自底向上递归
const isBalanced = root => {
    const height = root => {
        if (root === null) return 0
        const leftHeight = height(root.left)
        const rightHeight = height(root.right)
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1
        } else {
            return Math.max(leftHeight, rightHeight) + 1
        }
    }
    return height(root) >= 0
}

console.log(isBalanced(bt1))
console.log(isBalanced(bt2))
console.log(isBalanced(bt3))
console.log(isBalanced(null))