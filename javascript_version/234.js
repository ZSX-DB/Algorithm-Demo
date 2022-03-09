// const isPalindrome = head => {
//     const list = []
//     while (head) {
//         list.push(head.val)
//         head = head.next
//     }
//     let start = 0
//     let end = list.length - 1
//     while (start < end) {
//         if (list[start] !== list[end]) return false
//         start++
//         end--
//     }
//     return true
// }


const isPalindrome = head => {
    let frontPointer = head
    const check = curNode => {
        if (curNode !== null) {
            if (check(curNode.next) === false) return false
            if (curNode.val !== frontPointer.val) return false
            frontPointer = frontPointer.next
        }
        return true
    }
    return check(head)
}


const linkedList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
    }
}

console.log(isPalindrome(linkedList))
