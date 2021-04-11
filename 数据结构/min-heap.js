class MinHeap {
    constructor() {
        this.heap = []
    }

    getParentIdx(i) {
        return Math.floor((i - 1) / 2)
    }

    getLeftIdx(i) {
        return i * 2 + 1
    }

    getRightIdx(i) {
        return i * 2 + 2
    }

    up(idx) {
        if (idx === 0) return
        const parentIdx = this.getParentIdx(idx)
        if (this.heap[parentIdx] > this.heap[idx]) {
            this.swap(parentIdx, idx)
            this.up(parentIdx)
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    add(val) {
        this.heap.push(val)
        this.up(this.size() - 1)
    }

    pop() {
        this.heap[0] = this.heap.pop()
        this.down(0)
        return this.heap[0]
    }

    down(idx) {
        const leftIdx = this.getLeftIdx(idx)
        const rightIdx = this.getRightIdx(idx)
        if (this.heap[leftIdx] < this.heap[idx]) {
            this.swap(leftIdx, idx)
            this.down(leftIdx)
        }
        if (this.heap[rightIdx] < this.heap[idx]) {
            this.swap(rightIdx, idx)
            this.down(rightIdx)
        }
    }

    peek() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }
}
