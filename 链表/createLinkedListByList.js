const createLinkedListByList = list => {
    const head = {}
    const lastIndex = list.length - 1
    let cur = head
    list.forEach((item, index) => {
        cur.val = item
        cur.next = index === lastIndex ? null : {}
        cur = cur.next
    })
    return head
}

console.log(createLinkedListByList([1, 2, 3, 4, 5]))
