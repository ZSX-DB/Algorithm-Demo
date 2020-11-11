/**
 * 55、跳跃游戏
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 链接：https://leetcode-cn.com/problems/jump-game/
 */

function canJump(nums) {
    let len=nums.length
    if(len===0) return false
    if(len===1) return true

    let rightMost=0

    for(let i=0;i<len;++i){
        if(i<=rightMost){
            rightMost=Math.max(rightMost,nums[i]+i)
            if(rightMost>=len-1) return true
        }
    }

    return false

}

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([]))
console.log(canJump([9,5,2,7,6]))
console.log(canJump([9,1,1,0,9]))
console.log(canJump([5,0,1,0,9]))
console.log(canJump([0,1]))
console.log(canJump([0,1,3]))
console.log(canJump([0,3,1]))
console.log(canJump([0,2,1]))
console.log(canJump([0]))
console.log(canJump([1]))
console.log(canJump([2,0,0]))
console.log(canJump([3,0,0,0]))
console.log(canJump([1,0,0]))
console.log(canJump([4,0,0]))
console.log(canJump([2,5,0,0]))

