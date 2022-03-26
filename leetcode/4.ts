const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const nums = [...nums1, ...nums2].sort((x, y) => x - y)
    const length = nums.length
    if (length % 2 === 0) {
        return (nums[length / 2] + nums[length / 2 - 1]) / 2
    } else {
        return nums[Math.floor(length / 2)]
    }
}
