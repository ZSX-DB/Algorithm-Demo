// 数据量过大超时
// class Solution {
//     constructor(w) {
//         this.array = []
//         for (let i = 0; i < w.length; i++) {
//             this.array.push(...Array(w[i]).fill(i))
//         }
//         this.len = this.array.length
//     }
//
//     pickIndex() {
//         return this.array[Math.floor(Math.random() * this.len)]
//     }
// }

class Solution {
    constructor(w) {
        const len = w.length
        const prefix = Array(len).fill(0)
        prefix[0] = w[0]
        for (let i = 1; i < w.length; i++) {
            prefix[i] = w[i] + prefix[i - 1]
        }
        this.prefix = prefix
        this.sum = prefix[len - 1]
    }

    pickIndex() {
        const rand = Math.ceil(Math.random() * this.sum)
        const binarySearch = x => {
            let low = 0
            let high = this.prefix.length - 1
            while (low < high) {
                const mid = Math.floor((low + high) / 2)
                if (this.prefix[mid] < x) {
                    low = mid + 1
                } else {
                    high = mid
                }
            }
            return low
        }
        return binarySearch(rand)
    }
}

const s = new Solution([1, 3])
console.log(s.pickIndex())
