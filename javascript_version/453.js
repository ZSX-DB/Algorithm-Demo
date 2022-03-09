/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = nums => {
    let time = 0
    const min = Math.min(...nums)
    for (const num of nums) {
        time += (num - min)
    }
    return time
}
