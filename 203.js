const head1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: {
                            val: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

const head2 = {
    val: 7,
    next: {
        val: 7,
        next: {
            val: 7,
            next: {
                val: 7,
                next: null
            }
        }
    }
}

const head3 = {
    val: 11,
    next: null
}

const head4 = {
    val: 3,
    next: {
        val: 4,
        next: {
            val: 5,
            next: {
                val: 5,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

// const removeElements = (head, val) => {
//     const dumb = {
//         next: head
//     }
//     let cur = dumb
//     while (cur.next) {
//         cur.next.val === val ? cur.next = cur.next.next : cur = cur.next
//     }
//     return dumb.next
// }

const removeElements = (head, val) => {
    if (head === null) return head
    let cur = head
    while (cur) {
        while (cur.next && cur.next.val === val) {
            cur.next = cur.next.next
        }
        cur = cur.next
    }
    return head.val === val ? head.next : head
}

console.log(removeElements(head1, 6))
console.log(removeElements(head2, 7))
console.log(removeElements(head3, 11))
console.log(removeElements(head4, 5))
