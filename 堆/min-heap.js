/**
 * 最小堆、小根堆、小顶堆
 * 可以采用二叉数来表示，高效地可以用数组来表示
 * e.g. 下标为 i 的节点，其父节点下标为 Math.floor((i - 1) / 2) 或 Math.ceil(i / 2) - 1 ，其左右子节点的下标分别为 2 * i + 1 和 2 * i + 2
 */

// class MinHeap {
//     constructor() {
//         this.heap = []
//     }
//
//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
//     }
//
//     up(idx) {
//         let parentIdx = Math.floor((idx - 1) / 2)
//         if (this.heap[idx] < this.heap[parentIdx]) {
//             this.swap(idx, parentIdx)
//             this.up(parentIdx)
//         }
//     }
//
//     down(idx) {
//         let to = idx
//         let left = idx * 2 + 1
//         let right = idx * 2 + 2
//         if (this.heap[to] > this.heap[left]) to = left
//         if (this.heap[to] > this.heap[right]) to = right
//         if (to !== idx) {
//             this.swap(idx, to)
//             this.down(to)
//         }
//     }
//
//     add(value) {
//         this.heap.push(value)
//         this.up(this.heap.length - 1)
//     }
//
//     init(nums) {
//         for (const num of nums) {
//             this.add(num)
//         }
//     }
//
//     clear() {
//         this.heap = []
//     }
//
// }

class MinHeap {
    constructor() {
        this.heap = []
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    size() {
        return this.heap.length
    }

    // up(idx) {
    //     let parentIdx = Math.floor((idx - 1) / 2)
    //     if (this.heap[idx] < this.heap[parentIdx]) {
    //         this.swap(idx, parentIdx)
    //         this.up(parentIdx)
    //     }
    // }

    build() {
        for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
            this.heapify(i)
        }
    }

    heapify(idx) {
        let to = idx
        let left = idx * 2 + 1
        let right = idx * 2 + 2
        if (this.heap[to] > this.heap[left]) to = left
        if (this.heap[to] > this.heap[right]) to = right
        if (to !== idx) {
            this.swap(idx, to)
            this.heapify(to)
        }
    }

    add(value) {
        this.heap.push(value)
        this.build()
    }

    init(nums) {
        for (const num of nums) {
            this.add(num)
        }
    }

    clear() {
        this.heap = []
    }

}


module.exports = MinHeap
