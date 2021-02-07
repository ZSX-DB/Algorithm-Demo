class MyCircularQueue {
    constructor(k) {
        // 队列容量
        this.cap = k
        // 队首指针
        this.head = -1
        // 队尾指针
        this.tail = -1
        // 数据源
        this.list = []
    }

    Front() {
        if (this.isEmpty()) return -1
        return this.list[this.head]
    }

    Rear() {
        if (this.isEmpty()) return -1
        return this.list[this.tail]
    }

    enQueue(num) {
        if (this.isFull()) return false
        if (this.isEmpty()) this.head = 0
        this.tail = (this.tail + 1) % this.cap
        this.list[this.tail] = num
        return true
    }

    deQueue() {
        if (this.isEmpty()) return false
        if (this.head === this.tail) {
            this.head = this.tail = -1
        } else {
            this.head = (this.head + 1) % this.cap
        }
        return true
    }


    isEmpty() {
        return this.head === -1
    }

    // 当队列满时，头指针和尾指针重合
    isFull() {
        return this.head === (this.tail + 1) % this.cap
    }

}


const cq = new MyCircularQueue(3)
console.log(cq.enQueue(1))
console.log(cq.enQueue(2))
console.log(cq.enQueue(3))
console.log(cq.enQueue(4))
console.log(cq.Rear())
console.log(cq.isFull())
console.log(cq.deQueue())
console.log(cq.enQueue(4))
console.log(cq.Rear())

// const cq = new MyCircularQueue(8)
// console.log(cq.enQueue(3))
// console.log(cq.enQueue(9))
// console.log(cq.enQueue(5))
// console.log(cq.enQueue(0))
// console.log(cq.deQueue())
// console.log(cq.deQueue())
// console.log(cq.isEmpty())
// console.log(cq.isEmpty())
// console.log(cq.Rear())
// console.log(cq.Rear())
// console.log(cq.deQueue())