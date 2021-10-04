// const findKthLargest = (nums, k) => nums.sort((a, b) => b - a)[k - 1]

// 小根堆
// const findKthLargest = (nums, k) => {
//     let minHeap = [-Infinity]
//
//     const swap = (i, j) => {
//         [minHeap[i], minHeap[j]] = [minHeap[j], minHeap[i]]
//     }
//
//     const up = idx => {
//         let parent = Math.floor(idx / 2)
//         if (minHeap[idx] < minHeap[parent]) {
//             swap(idx, parent)
//             up(parent)
//         }
//     }
//
//     const down = idx => {
//         let to = idx
//         let left = idx * 2
//         let right = idx * 2 + 1
//         if (minHeap[to] > minHeap[left]) to = left
//         if (minHeap[to] > minHeap[right]) to = right
//         // 发生了更改
//         if (to !== idx) {
//             swap(idx, to)
//             // 递归下沉
//             down(to)
//         }
//     }
//
//     const add = val => {
//         // 不满则添加
//         if (minHeap.length <= k) {
//             minHeap.push(val)
//             up(minHeap.length - 1)
//         } else if (val > minHeap[1]) {
//             minHeap[1] = val
//             down(1)
//         }
//     }
//
//     for (let i = 0; i < nums.length; i++) {
//         add(nums[i])
//     }
//     return minHeap[1]
// }


const findKthLargest = (nums, k) => {
    class MinHeap {
        constructor() {
            this.minHeap = []
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

        size() {
            return this.minHeap.length
        }

    }

    const mh = new MinHeap()
    for (const num of nums) {
        if (mh.size() < k) {
            mh.add(num)
            mh.up(mh.size() - 1)
        } else if (num > mh.minHeap[0]) {
            mh.minHeap[0] = num
            mh.down(0)
        }
    }
    return mh.minHeap[0]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
