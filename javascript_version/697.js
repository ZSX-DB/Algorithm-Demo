const findShortestSubArray = nums => {
    const map = new Map()
    // 映射数组 [count, first, last]
    nums.forEach((item, idx) => {
        if (map.get(item)) {
            const arr = map.get(item)
            map.set(item, [arr[0] + 1, arr[1], idx])
        } else {
            map.set(item, [1, idx, idx])
        }
    })
    let list = []
    for (const val of map.values()) {
        list.push(val)
    }

    list.sort((a, b) => b[0] - a[0])

    list = list.filter(item => item[0] === list[0][0]).map(item=> item[2] - item[1] + 1)

    return Math.min(...list)
}


// const findShortestSubArray = nums => {
//     const map = new Map()
//
//     nums.forEach((item, idx) => {
//         if (map.get(item)) {
//             const arr = map.get(item)
//             map.set(item, [arr[0] + 1, arr[1], idx])
//         } else {
//             map.set(item, [1, idx, idx])
//         }
//     })
//
//     let maxCount = -Infinity
//     let min = Infinity
//
//     for (const [count, first, last] of map.values()) {
//         if (count > maxCount) {
//             maxCount = count
//             min = last - first + 1
//         } else if (count === maxCount) {
//             min = Math.min(min, last - first + 1)
//         }
//     }
//
//     return min
// }

console.log(findShortestSubArray([1]))
console.log(findShortestSubArray([1, 2, 2, 3, 1]))
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))