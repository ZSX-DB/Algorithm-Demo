const MaxHeap = require('../max-heap')

/**
 * 测试单个 MaxHeap 是否正确
 * @param heap {*[]}
 * @returns {boolean}
 */
const testSingleMaxHeap = heap => {
    for (let i = 0; i < heap.length; i++) {
        const cur = heap[i]
        const left = heap[i * 2 + 1]
        const right = heap[i * 2 + 2]
        if ((left && cur < left) || (right && cur < right)) return false
    }
    return true
}

/**
 * 创建待生成堆的数组
 * @param base {number}
 * @returns {number[]}
 */
const createRandomNums = (base = 70) => new Array(Math.ceil(Math.random() * base)).fill(0).map(_ => Math.ceil(Math.random() * base))

/**
 * 测试最大堆，默认 10000 条测试用例
 * @param time {number}
 */
const testAllMaxHeap = (time = 10000) => {
    const mh = new MaxHeap()
    for (let i = 0; i < time; i++) {
        const nums = createRandomNums()
        mh.init(nums)
        const result = testSingleMaxHeap(mh.heap)
        if (result === false) {
            console.log(`Test fail, the fail case is ${nums}`)
            break
        }
        mh.clear()
    }
    console.log('Test success')
}

testAllMaxHeap()
