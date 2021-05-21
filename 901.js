// 维护一个单调递减栈溢出
const getStockSpanner = prices => {
    const getLast = list => list[list.length - 1]
    const flags = []
    const stack = []
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[i] >= prices[getLast(stack)]) {
            stack.pop()
        }
        // 当 stack 为空, 代表它比前面的元素都大
        flags.push(stack.length ? i - getLast(stack) : i + 1)
        stack.push(i)
    }
    return flags
}

console.log(getStockSpanner([100]))
console.log(getStockSpanner([100, 120, 140]))
console.log(getStockSpanner([100, 80, 60, 70, 60, 75, 85]))

console.log('--------------------------------------------')

class StockSpanner {
    constructor() {
        this.prices = []
        this.stack = []
    }

    getLast(list) {
        return list[list.length - 1]
    }

    next(price) {
        while (this.stack.length && price >= this.prices[this.getLast(this.stack)]) {
            this.stack.pop()
        }
        // 由于 prices 是逐步添加的, 可以由长度推出索引
        const idx = this.prices.length
        const res = this.stack.length ? idx - this.getLast(this.stack) : idx + 1
        this.prices.push(price)
        this.stack.push(idx)
        return res
    }

}

const s = new StockSpanner()
console.log(s.next(100))
console.log(s.next(80))
console.log(s.next(60))
console.log(s.next(70))
console.log(s.next(60))
console.log(s.next(75))
console.log(s.next(85))
