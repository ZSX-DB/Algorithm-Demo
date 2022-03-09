// bfs
// const canVisitAllRooms = rooms => {
//     const record = new Set().add(0)
//     const list = [0]
//     while (list.length) {
//         const cur = list.shift()
//         rooms[cur].forEach(item => {
//             if (record.has(item) === false) {
//                 record.add(item)
//                 list.push(item)
//             }
//         })
//     }
//     return record.size === rooms.length
// }

// dfs
const canVisitAllRooms = rooms => {
    const record = new Set()
    const dfs = cur => {
        record.add(cur)
        rooms[cur].forEach(item => {
            record.has(item) === false && dfs(item)
        })
    }
    dfs(0)
    return record.size === rooms.length
}


console.log(canVisitAllRooms([[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]]))
console.log(canVisitAllRooms([[]]))
console.log(canVisitAllRooms([[], [1, 1], [2, 2]]))
console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [1], [0]]))
