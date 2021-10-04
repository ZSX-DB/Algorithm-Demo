/**
 * 选择排序
 * @param nums
 * @returns {*}
 */
const selectSort = nums => {
    const len = nums.length
    for(let i=0;i<len;i++){
        let minIndex = i
        for(let j = i+1;j<len;j++){
            if(nums[j]<nums[minIndex]) minIndex = j
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
    return nums
}

console.log(selectSort([5, 7, 2, 9, 21, 16]))
