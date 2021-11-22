class BinaryTreeNode {
    val: number
    children: BinaryTreeNode[]

    constructor(val?: number, children?: BinaryTreeNode[]) {
        this.val = (val === undefined ? 0 : val)
        this.children = (children === undefined ? [] : children)
    }
}

const maxDepth = (root: BinaryTreeNode | null): number => {
    if (root === null) {
        return 0
    }
    const depths: number[] = []
    const dfs = (node: BinaryTreeNode, depth: number): void => {
        if (node.children.length === 0) {
            depths.push(depth)
            return
        }
        for (const child of node.children) {
            dfs(child, depth + 1)
        }
    }
    dfs(root, 1)
    return Math.max(...depths)
}
