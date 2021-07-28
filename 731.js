class MyCalendarTwo {
    constructor() {
        this.flags = new Map()
        this.list = []
    }

    // 类似差分数组思想
    book(start, end) {
        this.flags.set(start, (this.flags.get(start) || 0) + 1)
        this.flags.set(end, (this.flags.get(end) || 0) - 1)
        this.insert(start)
        this.insert(end)
        let cur = 0
        for (const item of this.list) {
            if (this.flags.has(item)) {
                cur += this.flags.get(item)
            }
            if (cur >= 3) {
                this.flags.set(start, (this.flags.get(start) || 0) - 1)
                this.flags.set(end, (this.flags.get(end) || 0) + 1)
                return false
            }
        }
        return true
    }

    insert(val) {
        if (this.list.includes(val)) return
        const idx = this.list.findIndex(item => item > val)
        if (idx === -1) {
            this.list.push(val)
        } else {
            this.list.splice(idx, 0, val)
        }
    }

}

const mct = new MyCalendarTwo()
console.log(mct.book(10, 20))
console.log(mct.book(50, 60))
console.log(mct.book(10, 40))
console.log(mct.book(5, 15))
console.log(mct.book(5, 10))
console.log(mct.book(25, 55))
