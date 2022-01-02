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
    while (node) {
        if (counter - 1 === n) {
            node.next = node.next.next
            break
        }
        node = node.next
        counter--
    }
    return head
}
