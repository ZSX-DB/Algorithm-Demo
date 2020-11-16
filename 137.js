/**
 * 56、只出现一次的次数 II
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 链接：https://leetcode-cn.com/problems/single-number-ii/
 */

// 使用indexOf和lastIndexOf等js独有api
function singleNumber(nums) {
    const list = [...new Set(nums)]
    let num
    list.forEach(item => {
        if (nums.indexOf(item) === nums.lastIndexOf(item)) num = item
    })
    return num
}

// 排序，循环判断
function singleNumberFn(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i]
    }
    return nums[0]
}

// 去重，3倍数据减去原数据，得到所需值的2倍
function singleNumFn(nums) {
    const list = [...new Set(nums)]
    let sum = 3 * list.reduce((a, b) => a + b)
    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i]
    }
    return sum / 2
}

// let list = [0, 1, 0, 1, 0, 1, 99, 99, 99, 77]
// let list = [0, 1, 0, 1, 0, 1, 99]
let list = [0, 1, 3, 1, 1, 0, 0, 4, 5, 4, 4, 5, 5]

// 排序 每3个数据进行判断
function singleNum(nums) {
    let num
    nums.sort((a, b) => a - b)
    const len = Math.floor(nums.length / 3)
    for (let i = 0; i < len; i++) {
        if (nums[i * 3] !== nums[i * 3 + 2]) {
            num = nums[i * 3] === nums [i * 3 + 1] ? nums [i * 3 + 2] : nums[i * 3]
            break
        }
    }
    if (num === undefined) num = nums[nums.length - 1]
    return num
}

let errorList = [-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]

console.log(singleNumber(list), singleNumberFn(list), singleNumFn(list), singleNum(list))
console.log(singleNumber(errorList), singleNumberFn(errorList), singleNumFn(errorList), singleNum(errorList))

// ~ (按位非) 对任一数值 x 进行按位非操作的结果为 -(x + 1)
function sinNum(nums) {
    let seenOnce = 0, seenTwice = 0
    for (let i = 0; i < nums.length; i++) {
        seenOnce = ~seenTwice & (seenOnce ^ nums[i])
        seenTwice = ~seenOnce & (seenTwice ^ nums[i])
    }
    return seenOnce
}

console.log(sinNum(list), sinNum(errorList))