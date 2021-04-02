/**
 * 归并排序
 * @param nums
 * @returns {[]|*}
 */
const mergeSort = nums => {
    const merge = (left, right) => {
        const res = []
        while (left.length && right.length) {
            res.push(left[0] <= right[0] ? left.shift() : right.shift())
        }
        res.push(...left, ...right)
        return res
    }
    const len = nums.length
    if (len <= 1) return nums
    const mid = Math.floor(len / 2)
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
}


console.log(mergeSort([1, 5, 3, 7]))
console.log(mergeSort([1, 5]))
console.log(mergeSort([5, 3]))
