// class NumArray {
//     private readonly prefixEnd: number[]
//     private readonly nums: number[]
//
//     constructor(nums: number[]) {
//         this.nums = nums
//         this.prefixEnd = this.getPrefixEnd(nums)
//     }
//
//     private getPrefixEnd = (nums: number[]): number[] => {
//         const prefixEnd: number[] = [nums[0]]
//         for (let i = 1; i < nums.length; i++) {
//             prefixEnd[i] = prefixEnd[i - 1] + nums[i]
//         }
//         return prefixEnd
//     }
//
//     update(index: number, val: number): void {
//         const tmp = this.nums[index]
//         const diff = val - tmp
//         this.nums[index] = val
//         for (let i = index; i < this.prefixEnd.length; i++) {
//             this.prefixEnd[i] += diff
//         }
//     }
//
//     sumRange(left: number, right: number): number {
//         return this.prefixEnd[right] - this.prefixEnd[left] + this.nums[left]
//     }
// }

class NumArray {
    private readonly tree: number[]
    private readonly n: number
    private readonly buildTree = (nums: number[]) => {
        const n = nums.length
        const tree: number[] = [...Array(n).fill(0), ...nums]
        let i = n - 1
        while (i > 0) {
            tree[i] = tree[i * 2] + tree[i * 2 + 1]
            i--
        }
        return tree
    }

    constructor(nums: number[]) {
        this.n = nums.length
        this.tree = this.buildTree(nums)
    }

    update(index: number, val: number): void {
        const tree = this.tree
        index += this.n
        tree[index] = val
        while (index > 0) {
            let left = index
            let right = index
            if (index % 2 === 0) {
                right = index + 1
            } else {
                left = index - 1
            }
            tree[Math.floor(index / 2)] = tree[left] + tree[right]
            index = Math.floor(index / 2)
        }
    }

    sumRange(left: number, right: number): number {
        let sum: number = 0
        left += this.n
        right += this.n
        while (left <= right) {
            if (left % 2 === 1) {
                sum += this.tree[left]
                left++
            }
            if (right % 2 === 0) {
                sum += this.tree[right]
                right--
            }
            left = Math.floor(left / 2)
            right = Math.floor(right / 2)
        }
        return sum
    }

}

const na = new NumArray([1, 3, 5])
console.log(na.sumRange(0, 2))
na.update(1, 2)
console.log(na.sumRange(0, 2))
