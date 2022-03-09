const createLinkedList = list => {
    const len = list.length
    let head = {}
    let cur = head
    for (let i = 0; i < len; i++) {
        cur.val = list[i]
        cur.next = (i === len - 1 ? null : {})
        cur = cur.next
    }
    return head
}

const partition = (head, x) => {
    if (head === null) return null
    const list = []
    let cur = head
    while (cur) {
        list.push(cur.val)
        cur = cur.next
    }
    const less = []
    const nonLess = []
    for (const item of list) {
        if (item < x) {
            less.push(item)
        } else {
            nonLess.push(item)
        }
    }
    return createLinkedList([...less, ...nonLess])
}
