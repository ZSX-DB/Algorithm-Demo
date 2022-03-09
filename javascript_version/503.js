// 单调栈
const nextGreaterElements = (nums) => {
    const res = new Array(nums.length).fill(-1)
    nums = nums.map((item, idx) => [item, idx])
    const twoNums = [...nums, ...nums]
    const stack = []
    for (const num of twoNums) {
        while (stack.length && stack[stack.length - 1][0] < num[0]) {
            res[stack.pop()[1]] = num[0]
        }
        stack.push(num)
    }
    return res
}

console.log(nextGreaterElements([1, 2, 1]))
console.log(nextGreaterElements([6, 1, 2, 1, 3, 4, 5]))
console.log(nextGreaterElements([1, 3]))
