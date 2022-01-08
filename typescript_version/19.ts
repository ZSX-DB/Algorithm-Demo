// const removeNthFromEnd = (head: ListNode, n: number): ListNode | null => {
//     let counter: number = 0
//     let node: ListNode | null = head
//     while (node) {
//         node = node.next
//         counter++
//     }
//     if (counter === n) {
//         return head.next
//     }
//     node = head
//     for (let i: number = 1; i < counter - n; i++) {
//         node = node.next
//     }
//     node.next = node.next.next
//     return head
// }

const removeNthFromEnd = (head: ListNode, n: number): ListNode | null => {
    const root = new ListNode(0, head)
    const stack: (ListNode | null)[] = []
    let node: ListNode | null = root
    while (node) {
        stack.push(node)
        node = node.next
    }
    for (let i: number = 0; i < n; i++) {
        stack.pop()
    }
    node = stack[stack.length - 1]
    node.next = node.next.next
    return root.next
}
