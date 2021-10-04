class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// 重组链表
// const reverseBetween = (head, left, right) => {
//     let list = []
//     while (head) {
//         list.push(head.val)
//         head = head.next
//     }
//     list = [...list.slice(0, left - 1), ...list.slice(left - 1, right).reverse(), ...list.slice(right)]
//     const res = new ListNode(list[0])
//     head = res
//     for (let i = 1; i < list.length; i++) {
//         head.next = new ListNode(list[i])
//         head = head.next
//     }
//     return res
// }

const reverseBetween = (head, left, right) => {

    const dummyNode = new ListNode(-1)
    dummyNode.next = head

    let pre = dummyNode
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    let cur = pre.next

    for (let i = left; i < right; i++) {
        const next = cur.next
        cur.next = next.next
        next.next = pre.next
        pre.next = next
    }

    return dummyNode.next

}


const linkedList1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const linkedList2 = {
    val: 7,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(reverseBetween(linkedList1, 2, 4))
console.log(reverseBetween(linkedList2, 2, 4))
