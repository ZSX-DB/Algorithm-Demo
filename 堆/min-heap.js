/**
 * 最小堆、小根堆、小顶堆
 * 可以采用二叉数来表示，高效地可以用数组来表示
 * e.g. 下标为 i 的节点，其父节点下标为 Math.floor((i - 1) / 2) 或 Math.ceil(i / 2) - 1 ，其左右子节点的下标分别为 2 * i + 1 和 2 * i + 2
 */

class MinHeap {
    constructor() {
        this.minHeap = [-Infinity]
    }

    swap(i, j) {
        [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]]
    }

    up(idx) {
        let parentIdx = Math.floor((idx - 1) / 2)
        if (this.minHeap[idx] < this.minHeap[parentIdx]) {
            this.swap(idx, parentIdx)
            this.up(parentIdx)
        }
    }

    down(idx) {
        let to = idx
        let left = idx * 2 + 1
        let right = idx * 2 + 2
        if (this.minHeap[to] > this.minHeap[left]) to = left
        if (this.minHeap[to] > this.minHeap[right]) to = right
        if (to !== idx) {
            this.swap(idx, to)
            this.down(to)
        }
    }

    add(value) {
        this.minHeap.push(value)
        this.up(this.minHeap.length - 1)
    }

}

module.exports = MinHeap
