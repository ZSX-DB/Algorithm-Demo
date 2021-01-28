// const findKthLargest = (nums, k) => nums.sort((a, b) => b - a)[k - 1]

// 小根堆
const findKthLargest = (nums, k) => {
    let minHeap = [-Infinity]

    const swap = (i, j) => {
        [minHeap[i], minHeap[j]] = [minHeap[j], minHeap[i]]
    }

    const up = idx => {
        let parent = Math.floor(idx/2)
        if(minHeap[idx]<minHeap[parent]){
            swap(idx, parent)
            up(parent)
        }
    }

    const down = idx => {
        let to = idx
        let left = idx * 2
        let right = idx * 2 + 1
        if (minHeap[to] > minHeap[left]) to = left
        if (minHeap[to] > minHeap[right]) to = right
        // 发生了更改
        if(to !== idx){
            swap(idx, to)
            // 递归下沉
            down(to)
        }
    }

    const add = val => {
        // 不满则添加
        if (minHeap.length <= k) {
            minHeap.push(val)
            up(minHeap.length-1)
        } else if (val > minHeap[1]) {
            minHeap[1] = val
            down(1)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        add(nums[i])
    }
    return minHeap[1]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))