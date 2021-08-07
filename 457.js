// const circularArrayLoop = nums => {
//     const length = nums.length
//     const getSign = num => num >= 0 ? '+' : '-'
//     const handleI = (i, num) => {
//         i += num
//         while (i >= length) {
//             i -= length
//         }
//         while (i < 0) {
//             i += length
//         }
//         return i
//     }
//     const helper = i => {
//         const flags = Array(nums.length).fill(0)
//         const signSet = new Set()
//         while (true) {
//             flags[i]++
//             i = handleI(i, nums[i])
//             const sign = getSign(nums[i])
//             if (signSet.size !== 0 && signSet.has(sign) === false) {
//                 return false
//             }
//             signSet.add(sign)
//             if (flags[i] === 2) {
//                 return flags.filter(flag => flag === 2).length > 1
//             }
//         }
//     }
//     for (let i = 0; i < length; i++) {
//         if (helper(i)) {
//             return true
//         }
//     }
//     return false
// }

// 快慢指针
const circularArrayLoop = nums => {
    const length = nums.length
    const handleI = i => {
        i += nums[i]
        while (i >= length) {
            i -= length
        }
        while (i < 0) {
            i += length
        }
        return i
    }
    for (let i = 0; i < length; i++) {
        let slow = i
        let fast = handleI(i)
        while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[handleI(fast)] > 0) {
            if (slow === fast) {
                if (slow !== handleI(slow)) {
                    return true
                }
                break
            }
            slow = handleI(slow)
            fast = handleI(handleI(fast))
        }
    }
    return false
}

console.log(circularArrayLoop([1, -1, 2, 4, 4]))
console.log(circularArrayLoop([3, 1, 2]))
console.log(circularArrayLoop([1, 1, 1, 1, 1]))
console.log(circularArrayLoop([-1, 2]))
console.log(circularArrayLoop([2, -1, 1, 2, 2]))
console.log(circularArrayLoop([-2, 1, -1, -2, -2]))
