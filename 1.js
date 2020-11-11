/**
 * 1、两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 链接：https://leetcode-cn.com/problems/two-sum
 */


// 暴力法
// function twoSum(nums, target){
//     let len=nums.length,results=[];
//     for(let i=0;i<len;i++){
//         for(let j=0;j<len;j++){
//             if(nums[i]+nums[j]===target&&i!==j){
//                 results.push(i,j)
//             }
//         }
//     }
//     return [results[0],results[1]];
// };

// 利用类哈希表减少查询时间(用数组存放信息)
function twoSum(nums,target){
    let len=nums.length,temp=[];
    for(let i=0;i<len;i++){
        let dif=target-nums[i];
        if(temp[dif]!==undefined){
            return[temp[dif],i]
        }
        temp[nums[i]]=i;
    }
}



//输出了[3,4]而不是[2,4]
console.log(twoSum([1,2,4,4,5],9));


console.log(twoSum([3,4,5],8));
console.log(twoSum([3,3],6));
console.log(twoSum([3,2,4],6));
console.log(twoSum([2,7,11,15],13));