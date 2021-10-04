// class KthLargest {
//     constructor(k, nums) {
//         this.k = k
//         this.nums = nums
//     }
//
//     add(val) {
//         this.nums.push(val)
//         this.nums.sort((a, b) => b - a)
//         return this.nums[this.k - 1]
//     }
//
// }


// 最小堆(完全二叉树，任一非终端节点的数据值均不大于其左子节点和右子节点的值)
// 小顶堆的大小限制为k, 堆顶为第K大的元素
class KthLargest {
    constructor(k, nums) {
        this.minHeap = [-Infinity]
        this.k = k
        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i]);
        }
    }

    swap(i, j) {
        [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]]
    }

    add(val) {
        if (this.minHeap.length <= this.k) {
            // 最小堆不满，放入最小堆
            this.minHeap.push(val)
            this.up(this.minHeap.length - 1)
        } else {
            if (val > this.minHeap[1]) {
                this.minHeap[1] = val
                this.down(1)
            }
        }
        return this.minHeap[1]
    }

    up(idx) {
        // 使用数组模拟二叉树，parent为父节点索引
        const parent = Math.floor(idx / 2)
        // parent>0判断为非父节点
        if (parent > 0 && this.minHeap[parent] > this.minHeap[idx]) {
            this.swap(parent, idx)
            // 递归上浮
            this.up(parent)
        }
    }

    down(idx) {
        let to = idx
        // 和左子元素比较
        const left = idx * 2
        const right = idx * 2 + 1
        if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[to]) to = left
        if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[to]) to = right
        if (to !== idx) {
            this.swap(idx, to)
            this.down(to)
        }
    }

}


const kthLargest = new KthLargest(3, [4, 5, 8, 2])
console.log(kthLargest.add(3))
console.log(kthLargest.add(5))
console.log(kthLargest.add(10))
console.log(kthLargest.add(9))
console.log(kthLargest.add(4))
