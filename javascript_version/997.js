// const findJudge = (N, trust) => {
//     if (trust.length === 0) return N === 1 ? 1 : -1
//     const notSet = trust.reduce((pre, cur) => pre.add(cur[0]), new Set())
//     const res = [...trust.reduce((pre, cur) => pre.add(cur[1]), new Set())]
//         .filter(item => !notSet.has(item))
//         .map(num => ({
//             num,
//             members: trust.filter(item => item[1] === num).reduce((pre, cur) => pre.add(cur[0]), new Set())
//         }))
//         .find(item => item.members.size === N - 1)
//     return res ? res.num : -1
// }

// 使用图, 出度入度
const findJudge = (N, trust) => {
    if (trust.length === 0) return N === 1 ? 1 : -1
    const list = new Array(N + 1).fill(0).map(() => ({
        out: 0,
        in: 0
    }))
    trust.forEach(cur => {
        list[cur[0]].out++
        list[cur[1]].in++
    })
    return list.findIndex(item => item.out === 0 && item.in === N - 1)
}

console.log(findJudge(1, []))
console.log(findJudge(2, [[1, 2]]))
console.log(findJudge(3, [[1, 3], [2, 3]]))
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]))
console.log(findJudge(3, [[1, 2], [2, 3]]))
console.log(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]))
