/**
 * 双向链表
 */

class Node {
    constructor(el) {
        this.el = el
        this.pre = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(el) {
        const node = new Node(el)
        if (this.head === null) {
            this.head = node
        } else {
            this.head.pre = node
            this.lastEl().next = node
            node.pre = this.lastEl()
            node.next = this.head
        }
        this.length++
    }

    lastEl() {
        return this.elAt(this.length - 1)
    }

    elAt(position) {
        if (position < 0 || position >= this.length) return null
        let current = this.head
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current
    }

}

const nll = new DoublyLinkedList()
nll.append(3)
nll.append(7)
nll.append(11)
nll.append(32)

let node = nll.head
setInterval(()=>{
    console.log(node.pre.el)
    node = node.pre
}, 800)

