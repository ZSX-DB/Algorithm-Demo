/**
 * 34、在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

// 一次遍历
// const searchRange = (nums, target) => {
//   const len = nums.length
//   if (nums[0] > target || nums[len - 1] < target || nums.length === 0) return [-1, -1]
//   const list = []
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === target) {
//       list.push(i)
//       while (nums[i] === target) {
//         i++
//       }
//       list.push(i - 1)
//       break
//     }
//   }
//   return list.length > 0 ? list : [-1, -1]
// }

// 二分查找
const searchRange = (nums, target) => {
  let left = 0, right = nums.length -1
  while (left<=right){
    let mid = Math.floor((left + right) / 2)
    if(target<nums[mid]){
      right = mid - 1
    }else if(target>nums[mid]) {
      left = mid + 1
    }else{
      let start = mid
      let end = mid
      while (start>left && nums[start] === nums[start-1]){
        start--
      }
      while (end < right && nums[end] === nums[end+1]){
        end++
      }
      return [start, end]
    }
  }
  return [-1, -1]
}

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,7,8,8,10], 7))
console.log(searchRange([5,6,8,8,9,10,11], 7))
console.log(searchRange([], 0))




