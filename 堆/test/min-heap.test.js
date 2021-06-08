const MinHeap = require('../min-heap')

const testMinHeap = heap => {
    for (let i = 0; i < heap.length; i++) {
        const cur = heap[i]
        const left = heap[i * 2 + 1]
        const right = heap[i * 2 + 2]
        if ((left && cur > left) || (right && cur > right)) return false
    }
    return true
}
