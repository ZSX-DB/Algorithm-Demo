// 使用额外空间
// const findDisappearedNumbers = nums => {
//     const list = []
//     for (let i = 1; i <= nums.length; i++) {
//         if (!nums.includes(i)) list.push(i)
//     }
//     return list
// }


const findDisappearedNumbers = nums => {
    const n = nums.length

    for (const num of nums) {
        const idx = num % n ? num % n - 1 : n - 1
        console.log(idx)
        nums[idx] += n
    }

    return nums.map((item, idx) => {
        if (item <= n) return idx + 1
    }).filter(item => item !== undefined)

}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 3, 4, 3, 5, 7, 6, 9, 9]))
