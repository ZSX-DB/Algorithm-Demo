const swapPairs = (head: ListNode | null): ListNode | null => {
    if (head === null || head.next === null) {
        return head
    }
    const dummy: ListNode = head.next
    head.next = swapPairs(dummy.next)
    dummy.next = head
    return dummy
}
