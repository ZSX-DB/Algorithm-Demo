/**
 * 26、删除排序数组的重复项
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 */


// function removeDuplicates (nums) {
//     let len=nums.length,
//         count=0
//
//     for(let i=0;i<len;i++){
//         if(nums[i]!==nums[i-1]){
//             nums[i-count]=nums[i]
//         }else {
//             count++
//         }
//     }
//
//     return len-count
// }

// 双指针
function removeDuplicates (nums) {
    let len=nums.length,
        i=0

    for(let j=1;j<len;j++){
        if(nums[j]!==nums[j-1]){
            i++
            nums[i]=nums[j]
        }
    }

    return i+1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,0,0,0,0,0]))
