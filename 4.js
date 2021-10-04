/**
 * 4、寻找两个有序数组的中位数
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 */

const findMedianSortedArrays = (nums1, nums2) => {
    const nums = [...nums1, ...nums2].sort((x, y) => x - y)
    const len = nums.length
    return len % 2 ? nums[Math.floor(len / 2)] : (nums[len / 2] + nums[len / 2 - 1]) / 2
}


console.log(findMedianSortedArrays([1, 3], [2]))
