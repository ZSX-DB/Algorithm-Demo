// class RecentCounter {
//     constructor() {
//         this.record = []
//     }
//
//     pink(t) {
//         this.record.push(t)
//         const range = t - 3000
//         let index = this.record.length - 1
//         let count = 0
//         while (this.record[index] >= range) {
//             count++
//             index--
//         }
//         return count
//     }
//
// }

// class RecentCounter {
//     constructor() {
//         this.record = []
//     }
//
//     pink(t) {
//         this.record.push(t)
//         const range = t - 3000
//         for (let i = 0; i < this.record.length; i++) {
//             if(this.record[i]>=range) break
//             this.record.shift()
//             i--
//         }
//         return this.record.length
//     }
//
// }

class RecentCounter {
    constructor() {
        this.record = []
    }

    pink(t) {
        this.record.push(t)
        while (this.record[0] < t - 3000) {
            this.record.shift()
        }
        return this.record.length
    }

}


const recentCounter = new RecentCounter()
// console.log(recentCounter.pink(1))
// console.log(recentCounter.pink(100))
// console.log(recentCounter.pink(3001))
// console.log(recentCounter.pink(3002))
// console.log(recentCounter.pink(3100))

console.log(recentCounter.pink(642))
console.log(recentCounter.pink(1849))
console.log(recentCounter.pink(4921))
console.log(recentCounter.pink(5936))
console.log(recentCounter.pink(5957))
