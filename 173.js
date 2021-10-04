const binaryTree = {
    val: 7,
    left: {
        val: 3,
        left: null,
        right: null
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

// class BSTIterator {
//     constructor(root) {
//         this.list = this.traverse(root)
//         this.idx = 0
//     }
//
//     next() {
//         return this.list[this.idx++]
//
//     }
//
//     hasNext() {
//         return !!(this.list[this.idx] || this.list[this.idx] === 0)
//     }
//
//     traverse(root) {
//         const list = []
//         const fn = root => {
//             if (root === null) return
//             fn(root.left)
//             list.push(root.val)
//             fn(root.right)
//         }
//         fn(root)
//         return list
//     }
//
// }

class BSTIterator {
    constructor(root) {
        this.cur = root
        this.stack = []
    }

    next() {
        while (this.cur) {
            this.stack.push(this.cur)
            this.cur = this.cur.left
        }
        this.cur = this.stack.pop()
        const res = this.cur.val
        this.cur = this.cur.right
        return res
    }

    hasNext() {
        return !!(this.cur !== null || this.stack.length)
    }

}

const bst = new BSTIterator(binaryTree)
console.log(bst.next())
console.log(bst.next())
console.log(bst.hasNext())
console.log(bst.next())
console.log(bst.hasNext())
console.log(bst.next())
console.log(bst.hasNext())
console.log(bst.next())
console.log(bst.hasNext())



