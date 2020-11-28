// 节点
class Node {
    constructor(el) {
        this.el = el
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(el) {
        const node = new Node(el)
        if (this.head === null) {
            this.head = node
        } else {
            this.lastEl().next = node
        }
        this.length++
    }

    // 获取对应节点
    elAt(position) {
        if (position < 0 || position >= this.length) return null
        let current = this.head
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current
    }

    // 最后一个节点
    lastEl() {
        return this.elAt(this.length - 1)
    }

    // 移除对应节点
    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null
        } else if (position !== 0) {
            this.elAt(position - 1).next = this.elAt(position + 1)
            this.length--
        } else {
            this.head = this.head.next
            this.length--
        }
    }

    // 清除链表
    clear() {
        this.head = null
        this.length = 0
    }

    // 判断是否为空
    isEmpty() {
        return this.head === null
    }

    // 格式化输出
    log() {
        let current = this.head
        let text = ''
        while (current) {
            // text += `[el: ${current.el}, next: ${current.next ? current.next.el : null}]`
            text += `${current.el} -> `
            // 当直接对current赋值时，不会改变原来的引用对象
            current = current.next
        }
        return text.substring(0, text.length - 4)
    }

    insert(position, el) {
        const node = new Node(el)
        if (position < 0 || position >= this.length) {
            return null
        } else if (position !== 0) {
            node.next = this.elAt(position)
            this.elAt(position - 1).next = node
            this.length++
        } else {
            node.next = this.head
            this.head = node
            this.length++
        }
    }

    includes(el) {
        let current = this.head
        while (current) {
            if (current.el === el) return true
            current = current.next
        }
        return false
    }

    indexOf(el) {
        let current = this.head
        let len = this.length
        for (let i = 0; i < len; i++) {
            if (current.el === el) return i
            current = current.next
        }
        return -1
    }

}

const ll = new LinkList()
ll.append(3)
ll.append(7)
ll.append(12)
ll.append(99)
console.log(ll.log(), ll.length)

ll.removeAt(1)
console.log(ll.log(), ll.length)

ll.removeAt(0)
console.log(ll.log(), ll.length)

ll.insert(0, 27)
console.log(ll.log(), ll.length)

ll.insert(1, 32)
console.log(ll.log(), ll.length)

console.log(ll.indexOf(44), ll.indexOf(32), ll.indexOf(99))
console.log(ll.includes(44), ll.includes(12), ll.includes(99))


ll.clear()
console.log(ll.log(), ll.length, ll.isEmpty())
