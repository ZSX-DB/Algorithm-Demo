/**
 * 15、三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 链接：https://leetcode-cn.com/problems/3sum
 */

// 这部分代码可以解决普通情况，但对于[0,0,0,0,0]等特殊用例无法解决
// function threeSum(nums) {
//
//     nums = nums.sort((a, b) => a - b)
//
//     // tdArr接收二维数组
//     let len = nums.length,
//         tdArr = []
//
//
//     for (let i = 0; i < len; i++) {
//         let left = i + 1,
//             right = len - 1
//
//
//         while (left<=right){
//             if(nums[left]+nums[right]+nums[i]===0){
//                 tdArr.push([nums[left],nums[right],nums[i]])
//             }
//             left++
//             right--
//         }
//
//     }
//
//     return tdArr
//
// }

function threeSum(nums) {
    let tdArr = [],
        len = nums.length
    if (len < 3) return tdArr
    nums.sort((a, b) => a - b)
    for(let i=0;i<len;i++){
        if(nums[i]>0) break
        if(i>0&&nums[i]===nums[i-1]) continue
        let left=i+1,
            right=len-1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                tdArr.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return tdArr
}



console.log(threeSum([]))
console.log(threeSum([-1]))
console.log(threeSum([-1, 0]))

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([0, 0, 0, 0, 0, 0, 0, 1]))