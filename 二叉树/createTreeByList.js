/**
 * 根据广度优先遍历结果生成二叉树
 * @param list
 * @returns {{val: *}}
 */
const createTreeByList = list => {
    // 记录前序遍历结果
    const preorder = []
    // 记录中序遍历结果
    const inorder = []
    // 模拟前序遍历
    const preTraversal = idx => {
        if (list[idx] === null || list[idx] === undefined) return
        preorder.push(list[idx])
        preTraversal(idx * 2 + 1)
        preTraversal(idx * 2 + 2)
    }
    // 模拟中序遍历
    const inTraversal = idx => {
        if (list[idx] === null || list[idx] === undefined) return
        inTraversal(idx * 2 + 1)
        inorder.push(list[idx])
        inTraversal(idx * 2 + 2)
    }
    // 根据前序遍历和中序遍历结果重新构建二叉树
    const buildTree = (preorder, inorder) => {
        const map = new Map()
        inorder.forEach((item, idx) => {
            map.set(item, idx)
        })
        const helper = (preStart, preEnd, inStart, inEnd) => {
            if (preStart > preEnd) return null
            const root = {
                val: preorder[preStart]
            }
            const mid = map.get(preorder[preStart])
            const leftNum = mid - inStart
            root.left = helper(preStart + 1, preStart + leftNum, inStart, mid - 1)
            root.right = helper(preStart + leftNum + 1, preEnd, mid + 1, inEnd)
            return root
        }
        return helper(0, preorder.length - 1, 0, inorder.length - 1)
    }
    preTraversal(0)
    inTraversal(0)
    return buildTree(preorder, inorder)
}

const list1 = [3, 9, 20, null, null, 15, 7]
const list2 = [3, 9, 20, null, null, 15]
console.log(createTreeByList(list1))
console.log(createTreeByList(list2))
