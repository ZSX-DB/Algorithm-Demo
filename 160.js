// const getIntersectionNode = (headA, headB) => {
//     if (headA === null || headB === null) return null
//     const getLength = head => {
//         const list = []
//         while (head) {
//             list.push(head.val)
//             head = head.next
//         }
//         return list.length
//     }
//     const lengthA = getLength(headA)
//     const lengthB = getLength(headB)
//     let diff = Math.abs(lengthA - lengthB)
//     if (lengthA > lengthB) {
//         while (diff > 0) {
//             headA = headA.next
//             diff--
//         }
//     } else {
//         while (diff > 0) {
//             headB = headB.next
//             diff--
//         }
//     }
//     while (headA) {
//         if (headA === headB) return headA
//         headA = headA.next
//         headB = headB.next
//     }
// }

// const getIntersectionNode = (headA, headB) => {
//     const records = new Set()
//     let head = headA
//     while (head) {
//         records.add(head)
//         head = head.next
//     }
//     head = headB
//     while (head) {
//         if (records.has(head)) return head
//         head = head.next
//     }
//     return null
// }

const getIntersectionNode = (headA, headB) => {
    if (headA === null || headB === null) return null
    let pA = headA
    let pB = headB
    while (pA !== pB) {
        pA = (pA ? pA.next : headB)
        pB = (pB ? pB.next : headA)
    }
    return pA
}
