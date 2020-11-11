// function nextPermutation(nums) {
//     let len = nums.length
//     let isMax = true
//     for (let i = len - 1; i > 0; i--) {
//         if (nums[i] > nums[i - 1]) {
//             isMax = false
//             let temp = nums[i]
//             nums[i] = nums[i - 1]
//             nums[i - 1] = temp
//             break
//         }
//     }
//     return isMax ? nums.reverse() : nums
// }


function nextPermutation(nums) {
    let len = nums.length
    let isMax = true
    // 判断是不是最大数组
    // for (let i = len - 1; i > 0; i--) {
    //     if (nums[i] > nums[i - 1]) {
    //         isMax = false
    //     }
    // }

    for (let i = len - 1; i > 0; i--) {

        for (let j = len - 2; j > 0; j--) {

            if(nums[i]>nums[j]){
                let temp=nums[i]
                nums[i]=nums[j]
                nums[j]=temp



                nums=nums.slice(0,j).concat(nums.slice(j).sort((a,b)=>a-b))

            }
        }
    }


    return isMax ? nums.reverse() : nums
}


console.log(nextPermutation([9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(nextPermutation([5, 8, 6]))
console.log(nextPermutation([3, 1, 5, 7, 9]))
console.log(nextPermutation([1, 2, 3]))
console.log(nextPermutation([1, 1, 5]))
console.log(nextPermutation([1,2,3,4, 6, 5]))    // 5,4,6

// 输入:
//     [1,4,2]
// 输出
//     [4,1,2]
// 预期结果
//     [2,1,4]