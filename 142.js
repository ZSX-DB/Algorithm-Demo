// 改变了原链表，不符合要求
// const detectCycle = head => {
//     if (head === null) return null
//     while (head.next) {
//         if (head.next.hasOwnProperty('flag')) return head.next
//         head.flag = true
//         head = head.next
//     }
//     return null
// }

const detectCycle = head => {
    if (head === null) return null
    const record = new Map()
    while (head.next) {
        if (record.has(head)) return head
        record.set(head, true)
        head = head.next
    }
    return null
}
