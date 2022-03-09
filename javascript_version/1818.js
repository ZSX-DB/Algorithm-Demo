const minAbsoluteSumDiff = (nums1, nums2) => {
    const len = nums1.length
    const sorted = [...nums1].sort((x, y) => x - y)
    const baseSum = nums1.reduce((sum, num, idx) => sum + Math.abs(nums2[idx] - num), 0)
    const binarySearch = num => {
        let left = 0
        let right = len - 1
        if (num <= sorted[left]) return sorted[left] - num
        if (num >= sorted[right]) return num - sorted[right]
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (sorted[mid] > num) {
                right = mid - 1
            } else if (sorted[mid] < num) {
                left = mid + 1
            } else {
                return 0
            }
        }
        return Math.min(Math.abs(num - sorted[left]), Math.abs(num - sorted[right]))
    }
    let minSum = baseSum
    for (let i = 0; i < len; i++) {
        minSum = Math.min(minSum, baseSum - Math.abs(nums1[i] - nums2[i]) + binarySearch(nums2[i]))
    }
    return minSum % 1000000007
}
