class MyCalendar {
    constructor() {
        this.limits = []
    }

    // 两个日程安排 [s1，e1) 和 [s2，e2) 不冲突: e1<=s2 或 e2<=s1
    book(start, end) {
        if (this.limits.every(limit => end <= limit[0] || limit[1] <= start)) {
            this.limits.push([start, end])
            return true
        } else {
            return false
        }
    }
}

const mc = new MyCalendar()
// console.log(mc.book(10, 20))
// console.log(mc.book(15, 25))
// console.log(mc.book(20, 30))

console.log(mc.book(47, 50))
console.log(mc.book(33, 41))
console.log(mc.book(39, 45))
console.log(mc.book(33, 42))
console.log(mc.book(25, 32))
console.log(mc.book(26, 35))
console.log(mc.book(19, 25))
console.log(mc.book(3, 8))
console.log(mc.book(8, 13))
console.log(mc.book(18, 27))
