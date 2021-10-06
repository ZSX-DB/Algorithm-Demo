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

const tn1 = {
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
}

const tn2 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: {
                    val: 5,
                    left: null,
                    right: null
                },
                right: null
            },
            right: null
        },
        right: null
    },
    right: null
}

const tn3 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: {
                    val: 5,
                    left: null,
                    right: null
                },
                right: {
                    val: 6,
                    left: null,
                    right: null
                }
            },
            right: null
        },
        right: null
    },
    right: null
}

const tn4 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
}

const tn5 = {
    val: 1,
    left: null,
    right: null
}

const tn6 = null

const serialize = (root: TreeNode | null): string => {
    const helper = (node: TreeNode | null, str: string = '') => {
        if (node === null) {
            str += 'None,'
        } else {
            str += `${node.val},`
            str = helper(node.left, str)
            str = helper(node.right, str)
        }
        return str
    }
    return helper(root)
}

const deserialize = (data: string): TreeNode | null => {
    const dataArray = data.split(',')
    const helper = (dataList: string[]) => {
        if (dataList[0] === 'None') {
            dataList.shift()
            return null
        }
        const root = new TreeNode(parseInt(dataList[0]))
        dataList.shift()
        root.left = helper(dataList)
        root.right = helper(dataList)
        return root
    }
    return helper(dataArray)
}

const tn1Str = serialize(tn1)
const tn2Str = serialize(tn2)
const tn3Str = serialize(tn3)
const tn4Str = serialize(tn4)
const tn5Str = serialize(tn5)
const tn6Str = serialize(tn6)
console.log(tn1Str)
console.log(tn2Str)
console.log(tn3Str)
console.log(tn4Str)
console.log(tn5Str)
console.log(tn6Str)

console.log(deserialize(tn1Str))
console.log(deserialize(tn2Str))
console.log(deserialize(tn3Str))
console.log(deserialize(tn4Str))
console.log(deserialize(tn5Str))
console.log(deserialize(tn6Str))
