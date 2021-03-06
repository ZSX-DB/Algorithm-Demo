/**
 * 计数排序
 * @param nums
 * @returns {*}
 */

const countSort = nums => {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    const res = []
    const plusList = new Array(max + 1).fill(0)
    const minusList = new Array(Math.abs(min) + 1).fill(0)
    for (const num of nums) {
        num >= 0 ? plusList[num]++ : minusList[-num]++
    }

    for (let i = minusList.length - 1; i > 0; i--) {
        if (minusList[i] > 0) {
            while (minusList[i]--) {
                res.push(-i)
            }
        }
    }

    for (let i = 0; i < plusList.length; i++) {
        if (plusList[i] > 0) {
            while (plusList[i]--) {
                res.push(i)
            }
        }
    }

    return res
}

console.log(countSort([7, 5, 7, 13, 2, -11, -11, 9, 21, 99, 16, -3, -7, 2]))
