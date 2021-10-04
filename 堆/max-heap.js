/**
 * 最大堆、大根堆、大顶堆
 */
class MaxHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    init(nums) {
        for (const num of nums) {
            this.add(num)
        }
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
        if (this.heap[left] && this.heap[to] < this.heap[left]) to = left
        if (this.heap[right] && this.heap[to] < this.heap[right]) to = right
        if (to !== idx) {
            this.swap(idx, to)
            this.heapify(to)
        }
    }

    add(value) {
        this.heap.push(value)
        this.build()
    }

    clear() {
        this.heap = []
    }

}

module.exports = MaxHeap
