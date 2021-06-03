// const topKFrequent = (nums, k) => [...nums.reduce((record, num) => record.set(num, (record.get(num) || 0) + 1), new Map())].sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0])

// const topKFrequent = (nums, k) => {
//     class MinHeap {
//         constructor() {
//             this.minHeap = []
//         }
//
//         swap(i, j) {
//             [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]]
//         }
//
//         up(idx) {
//             let parentIdx = Math.floor((idx - 1) / 2)
//             if (this.minHeap[parentIdx] && this.minHeap[idx][1] < this.minHeap[parentIdx][1]) {
//                 this.swap(idx, parentIdx)
//                 this.up(parentIdx)
//             }
//         }
//
//         down(idx) {
//             let to = idx
//             let left = idx * 2 + 1
//             let right = idx * 2 + 2
//             if (this.minHeap[left] && this.minHeap[to][1] > this.minHeap[left][1]) to = left
//             if (this.minHeap[right] && this.minHeap[to][1] > this.minHeap[right][1]) to = right
//             if (to !== idx) {
//                 this.swap(idx, to)
//                 this.down(to)
//             }
//         }
//
//         add(value) {
//             this.minHeap.push(value)
//             this.up(this.minHeap.length - 1)
//         }
//
//         getOriginLength() {
//             return this.minHeap.length
//         }
//
//     }
//
//     const mh = new MinHeap()
//     const record = new Map()
//     for (const num of nums) {
//         record.set(num, (record.get(num) || 0) + 1)
//     }
//     for (const [key, val] of [...record]) {
//         if (mh.getOriginLength() < k) {
//             mh.add([key, val])
//         } else {
//             if (val > mh.minHeap[0][1]) {
//                 mh.minHeap[0] = [key, val]
//                 mh.down(0)
//             }
//         }
//     }
//     return mh.minHeap.reverse().slice(0, k).map(item => item[0])
// }

const topKFrequent = (nums, k) => {
    const minHeap = []
    const records = new Map()
    const swap = (i, j) => {
        [minHeap[i], minHeap[j]] = [minHeap[j], minHeap[i]]
    }
    const up = idx => {
        let parentIdx = Math.floor((idx - 1) / 2)
        if (minHeap[parentIdx] && minHeap[idx][1] < minHeap[parentIdx][1]) {
            swap(idx, parentIdx)
            up(parentIdx)
        }
    }
    const down = idx => {
        let to = idx
        let left = idx * 2 + 1
        let right = idx * 2 + 2
        if (minHeap[left] && minHeap[to][1] > minHeap[left][1]) to = left
        if (minHeap[right] && minHeap[to][1] > minHeap[right][1]) to = right
        if (to !== idx) {
            swap(idx, to)
            down(to)
        }
    }
    const add = value => {
        minHeap.push(value)
        up(minHeap.length - 1)
    }
    for (const num of nums) {
        records.set(num, (records.get(num) || 0) + 1)
    }
    for (const record of [...records]) {
        if (minHeap.length < k) {
            add(record)
        } else if (record[1] > minHeap[0][1]) {
            minHeap[0] = record
            down(0)
        }
    }
    return minHeap.reverse().slice(0, k).map(item => item[0])
}

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1], 1))
