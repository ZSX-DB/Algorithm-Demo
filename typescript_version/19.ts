import {ListNode} from "./common"

const removeNthFromEnd = (head: ListNode, n: number): ListNode | null => {
    let counter: number = 0
    let node: ListNode | null = head
    while (node) {
        node = node.next
        counter++
    }
    if (counter === n) {
        return head.next
    }
    node = head
    for (let i: number = 1; i < counter - n; i++) {
        node = node.next
    }
    node.next = node.next.next
    return head
}
