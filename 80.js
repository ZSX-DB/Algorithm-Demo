// const removeDuplicates = nums => {
//     for (let i = 1; i < nums.length - 1; i++) {
//         if (nums[i - 1] === nums[i] && nums[i] === nums[i + 1]) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     return nums
// }

// 快慢指针
const removeDuplicates = nums => {
    const len = nums.length
    if(len <= 2) return len
    let slow = 2
    let fast = 2
    while (fast < len){
        if(nums[slow - 2]!== nums[fast]){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
