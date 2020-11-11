/**
 * 4、寻找两个有序数组的中位数
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 */

 
function findMedianSortedArrays(nums1, nums2) {
    // let arr=nums1+nums2;    相加后变成字符串而不是数组
    //解构赋值
    let arr=[...nums1,...nums2],len=arr.length;
    arr.sort((a,b)=>a-b);
    if(len%2===1){
        // return arr[Math.floor(len/2)]; 
        return arr[len/2-0.5];
    }else{
        return (arr[len/2]+arr[len/2-1])/2;
    }
}


console.log(findMedianSortedArrays([1,3],[2]));