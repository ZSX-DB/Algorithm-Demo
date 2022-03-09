class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const l1 = {
    val: 1,
    next: null
}

const l2 = {
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

const l3 = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

// 记录长度
// const removeNthFromEnd = (head, n) => {
//     let count = 0
//     let cur1 = head
//     while (cur1){
//         cur1 = cur1.next
//         count++
//     }
//     if(count === n) return head.next
//     let cur2 = head
//     while (cur2){
//         if(count - 1 === n){
//             cur2.next = cur2.next.next
//             break
//         }else {
//             cur2 = cur2.next
//         }
//         count--
//     }
//     return head
// }

// 栈(先进后出，依次进栈出栈)
// const removeNthFromEnd = (head, n) => {
//     const dummy = new ListNode(0, head)
//     let cur = dummy
//     const stack = []
//     while (cur) {
//         stack.push(cur)
//         cur = cur.next
//     }
//     for (let i = 0; i < n; i++) {
//         stack.pop()
//     }
//     let pre = stack[stack.length - 1]
//     pre.next = pre.next.next
//     return dummy.next
// }

// 快慢指针
const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(0, head)
    let slow = dummy
    let fast = dummy
    // 比慢指针快n步，当fast为null时，slow对应的节点就是待删除的节点
    while (n){
        fast = fast.next
        n--
    }
    // 便于删除操作，获取待删除节点的前节点
    while (fast.next){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
}


console.log(removeNthFromEnd(l1, 1))
console.log(removeNthFromEnd(l2, 2).next)
// console.log(removeNthFromEnd(l2, 5))
console.log(removeNthFromEnd(l3, 1))
