class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

class BinaryTree {

    constructor() {

    }

    private getMaxDepth(node: TreeNode): number {
        if (node === null) {
            return 0
        }
        const leftDepth = this.getMaxDepth(node.left)
        const rightDepth = this.getMaxDepth(node.right)
        return Math.max(leftDepth, rightDepth) + 1
    }

    serialize(root: TreeNode | null): string {
        if (root === null) {
            return '[]'
        }
        const maxDepth = this.getMaxDepth(root)
        const nodes = []
        const queue: TreeNode[] = [root]
        let currDepth = 1
        while (currDepth <= maxDepth && queue.length) {
            const length = queue.length
            for (let i = 0; i < length; i++) {
                const currNode = queue.shift()
                if (currNode === null) {
                    nodes.push(null)
                    continue
                }
                nodes.push(currNode.val)
                if (currNode.left !== null) {
                    queue.push(currNode.left)
                } else {
                    queue.push(null)
                }
                if (currNode.right !== null) {
                    queue.push(currNode.right)
                } else {
                    queue.push(null)
                }
            }
            currDepth++
        }
        return JSON.stringify(nodes)
    }

    deserialize(data: string): TreeNode | null {
        const nodes = JSON.parse(data)
        if (nodes.length === 0) {
            return null
        }
        nodes.push(null)
        const maxPossibleDepth = nodes.filter(node => node !== null).length
        const maxPossibleNodeNums = Array(maxPossibleDepth).fill(0).map((_, idx) => idx).reduce((sum, num) => sum + 2 ** num, 0)
        const fillNull = () => {
            for (let i = 0; i < maxPossibleNodeNums; i++) {
                if (nodes[i] === null) nodes.splice(2 * i + 1, 0, null, null)
            }
        }
        fillNull()
        const items = []
        let len = 1
        let start = 0
        while (len < nodes.length) {
            const curr = []
            for (let i = start; i < start + len; i++) {
                curr.push(nodes[i])
            }
            if (curr.every(item => item === null || item === undefined)) {
                break
            }
            items.push(curr)
            start += len
            len *= 2
        }
        items.reverse()
        for (let i = 0; i < items.length; i++) {
            if (i === 0) {
                items[i] = items[i].map(item => item === null ? null : {val: item, left: null, right: null})
            } else {
                items[i] = items[i].map((item, index) => item === null ? null : {
                    val: item,
                    left: items[i - 1][2 * index],
                    right: items[i - 1][2 * index + 1]
                })
            }
        }
        return items[items.length - 1][0]
    }

}

const bt = new BinaryTree()

console.log(bt.serialize({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
}))

console.log(bt.deserialize('[1,2,3,null,null,4,5]'))
