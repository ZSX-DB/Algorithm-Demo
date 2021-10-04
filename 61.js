const l1 = {
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

const l2 = {
    val: 0,
    next: {
        val: 1,
        next: {
            val: 2,
            next: null
        }
    }
}


const rotateRight = (head, k) => {
    let len = 0
    let cur = head
    while (cur) {
        cur = cur.next
        len++
    }
    if(len === 0 || k % len === 0) return head

    cur = head
    while (cur.next){
        cur = cur.next
    }
    cur.next = JSON.parse(JSON.stringify(head))
    let num = len - k % len
    cur = head
    while (num--){
        cur = cur.next
    }
    let tmp = cur
    while (--len){
        tmp = tmp.next
    }
    tmp.next = null
    return cur
}

console.log(rotateRight(null, 5))
console.log(rotateRight(JSON.parse(JSON.stringify(l1)), 1))
console.log(rotateRight(JSON.parse(JSON.stringify(l1)), 2))
console.log(rotateRight(l2, 4))
