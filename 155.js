/**
 * 18、最小栈
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 * 链接：https://leetcode-cn.com/problems/min-stack/
 */

// class MinStack {
//     constructor() {
//         this.list = []
//     }
//
//     push(x) {
//         this.list.push(x)
//     }
//
//     // 按照先进后出的原则存储数据，先进入的数据被压入栈底，故栈顶是最后一个
//     top() {
//         return this.list[this.list.length - 1]
//     }
//
//     pop() {
//         this.list.pop()
//     }
//
//     getMin() {
//         return Math.min(...this.list)
//     }
//
// }

// 优化版
class MinStack {
    constructor() {
        this.list = []
        this.minList = []
    }

    push(x) {
        if (x < this.minList[this.minList.length - 1] || this.list.length === 0) {
            this.minList.push(x)
        } else {
            this.minList.push(this.minList[this.minList.length - 1])
        }
        this.list.push(x)
    }

    top() {
        return this.list[this.list.length - 1]
    }

    pop() {
        this.list.pop()
        this.minList.pop()
    }

    getMin() {
        return this.minList[this.minList.length - 1]
    }

}

let minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.top())
console.log(minStack.getMin())
