const l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
const l2 = null
const l3 = {
    val: 1,
    next: null
}
const l4 = {
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

// 不符合题意，设置标志位，奇数执行操作
// const swapPairs = head => {
//     let mark = 1
//     let cur = head
//     while (cur){
//         if(mark % 2 && cur.next ){
//             const tmp = cur.val
//             cur.val = cur.next.val
//             cur.next.val = tmp
//         }
//         mark++
//         cur = cur.next
//     }
//     return head
// }

// 迭代法
// const swapPairs = head => {
//     let dummyHead = {val: 0}
//     dummyHead.next = head
//     let tmp = dummyHead
//     while (tmp.next && tmp.next.next) {
//         const node1 = tmp.next
//         const node2 = tmp.next.next
//         tmp.next = node2
//         node1.next = node2.next
//         node2.next = node1
//         tmp = node1
//     }
//     return dummyHead.next
// }

// 递归
const swapPairs = head => {
    if(head === null || head.next === null) return head
    const newHead = head.next
    // 返回的必须是排序好的链表
    head.next = swapPairs(newHead.next)
    newHead.next = head
    return newHead
}


console.log(swapPairs(l1))
console.log(swapPairs(l2))
console.log(swapPairs(l3))
console.log(swapPairs(l4).next.next)
