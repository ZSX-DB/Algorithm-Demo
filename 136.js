/**
 * 56、只出现一次的次数 I
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 链接：https://leetcode-cn.com/problems/single-number/
 */

function singleNumber(nums) {
    const list = [...new Set(nums)]
    let num
    list.forEach(item => {
        if (nums.indexOf(item) === nums.lastIndexOf(item)) num = item
    })
    return num
}

let list = [1, 2, 3, 4, 5, 6, 7, 7, 7, 4, 3, 2, 2, 1, 6, 27]
console.log(singleNumber(list))

// 使用异或
function singleNum(nums) {
    let base = 0
    for (let i = 0; i < nums.length; i++) {
        base = base ^ nums[i]
    }
    return base
}

console.log(singleNum(list))