// class MyQueue {
//     constructor() {
//         this.stack = []
//     }
//
//     push(x) {
//         this.stack.push(x)
//     }
//
//     pop() {
//         const len = this.stack.length
//         const first = this.stack[0]
//         for (let i = 0; i < len - 1; i++) {
//             this.stack[i] = this.stack[i+1]
//         }
//         this.stack[len - 1] = first
//         return this.stack.pop()
//     }
//
//     peek() {
//         return this.stack[0]
//     }
//
//     empty() {
//         return this.stack.length === 0
//     }
//
// }

// 双栈实现队列
class MyQueue {
    constructor() {
        this.inStack = []
        this.outStack = []
    }

    inToOut() {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
    }

    push(x) {
        this.inStack.push(x)
    }

    pop() {
        if (this.outStack.length === 0) this.inToOut()
        return this.outStack.pop()
    }

    peek() {
        if (this.outStack.length === 0) this.inToOut()
        return this.outStack[this.outStack.length - 1]
    }

    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0
    }

}


const mq = new MyQueue()
mq.push(1)
mq.push(2)
console.log(mq.peek())
console.log(mq.pop())
mq.push(7)
console.log(mq.peek())
console.log(mq.pop())
console.log(mq.empty())
console.log(mq.pop())
console.log(mq.empty())
