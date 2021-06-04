// const frequencySort = s => [...s.split('').reduce((record, ch) => record.set(ch, (record.get(ch) || 0) + 1), new Map())]
//     .map(([ch, amount]) => new Array(amount).fill(ch).join(''))
//     .sort((x, y) => y.length - x.length)
//     .join('')


// 采用大顶堆，采用 ['empty', -Infinity] 来替换
// const frequencySort = s => {
//     const records = [...s.split('').reduce((record, ch) => record.set(ch, (record.get(ch) || 0) + 1), new Map())]
//     const maxHeap = []
//     const swap = (i, j) => {
//         [maxHeap[i], maxHeap[j]] = [maxHeap[j], maxHeap[i]]
//     }
//     const heapify = idx => {
//         let to = idx
//         let left = idx * 2 + 1
//         let right = idx * 2 + 2
//         if (maxHeap[left] && maxHeap[to][1] < maxHeap[left][1]) to = left
//         if (maxHeap[right] && maxHeap[to][1] < maxHeap[right][1]) to = right
//         if (to !== idx) {
//             swap(idx, to)
//             heapify(to)
//         }
//     }
//     const add = val => {
//         maxHeap.push(val)
//         for (let i = Math.floor(maxHeap.length / 2) - 1; i >= 0; i--) {
//             heapify(i)
//         }
//     }
//     for (const record of records) {
//         add(record)
//     }
//     let str = ''
//     let len = maxHeap.length
//     while (len > 0) {
//         const [ch, amount] = maxHeap[0]
//         str += new Array(amount).fill(ch).join('')
//         maxHeap[0] = ['empty', -Infinity]
//         heapify(0)
//         len--
//     }
//     return str
// }

const frequencySort = s => {
    class MaxHeap {
        constructor() {
            this.heap = []
        }

        init(nums) {
            for (const num of nums) {
                this.add(num)
            }
        }

        size() {
            return this.heap.length
        }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
        }

        build() {
            for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
                this.heapify(i)
            }
        }

        heapify(idx) {
            let to = idx
            let left = idx * 2 + 1
            let right = idx * 2 + 2
            if (this.heap[left] && this.heap[to][1] < this.heap[left][1]) to = left
            if (this.heap[right] && this.heap[to][1] < this.heap[right][1]) to = right
            if (to !== idx) {
                this.swap(idx, to)
                this.heapify(to)
            }
        }

        add(value) {
            this.heap.push(value)
            this.build()
        }

        getRoot() {
            const res = this.heap.shift()
            this.build()
            return res
        }

    }

    const records = [...s.split('').reduce((record, ch) => record.set(ch, (record.get(ch) || 0) + 1), new Map())]
    const mh = new MaxHeap()
    let str = ''
    mh.init(records)
    while (mh.size()) {
        const [ch, amount] = mh.getRoot()
        str += new Array(amount).fill(ch).join('')
    }
    return str
}

console.log(frequencySort('tree'))
console.log(frequencySort('cccaaa'))
