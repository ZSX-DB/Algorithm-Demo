/**
 * 大根堆、大顶堆
 */
class MaxHeap {
    constructor() {
        this.maxHeap = [Infinity]
    }

    swap(i, j) {
        [this.maxHeap[i], this.maxHeap[j]] = [this.maxHeap[j], this.maxHeap[i]]
    }

    up(idx) {
        let parentIdx = Math.ceil(idx / 2) - 1
        if (this.maxHeap[idx] > this.maxHeap[parentIdx]) {
            this.swap(idx, parentIdx)
            this.down(parentIdx)
        }
    }

    down(idx) {
        let to = idx
        let left = idx * 2
        let right = idx * 2 + 1
        if (this.maxHeap[to] < this.maxHeap[left]) to = left
        if (this.maxHeap[to] < this.maxHeap[right]) to = right
        // 发生了更改
        if (to !== idx) {
            this.swap(idx, to)
            this.up(to)
        }
    }

    add(value) {
        this.maxHeap.unshift(value)
        this.down(0)
    }

}

const mh = new MaxHeap()
const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]

for (const num of nums) {
    mh.add(num)
}
console.log(mh.maxHeap)
