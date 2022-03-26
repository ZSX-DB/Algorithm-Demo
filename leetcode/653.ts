// const findTarget = (root: TreeNode | null, k: number): boolean => {
//     const nums: number[] = []
//     const memo: Set<number> = new Set<number>()
//     const helper = (node: TreeNode | null): void => {
//         if(node !== null) {
//             nums.push(node.val)
//             helper(node.left)
//             helper(node.right)
//         }
//     }
//     helper(root)
//     for(const num of nums) {
//         if (memo.has(k - num)) {
//             return true
//         }
//         memo.add(num)
//     }
//     return false
// }

const findTarget = (root: TreeNode | null, k: number): boolean => {
    let result: boolean = false
    const memo: Set<number> = new Set<number>()
    const helper = (node: TreeNode | null): void => {
        if(node !== null) {
            if (memo.has(k - node.val)) {
                result = true
            }
            memo.add(node.val)
            helper(node.left)
            helper(node.right)
        }
    }
    helper(root)
    return result
}
