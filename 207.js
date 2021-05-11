const canFinish = (numCourses, prerequisites) => {
    // 入度数组
    const inDegreeList = new Array(numCourses).fill(0)
    prerequisites.forEach(item => {
        inDegreeList[item[0]]++
    })
    // map 映射为 被依赖元素 => 依赖其的数组
    const record = new Map()
    prerequisites.forEach(item => {
        if (record.has(item[1]) === false) {
            record.set(item[1], [item[0]])
        } else {
            record.set(item[1], [...record.get(item[1]), item[0]])
        }
    })
    // 获取入度为 0 的选项, 入度为 0 代表不需要依赖其他课程
    const queue = inDegreeList.reduce((pre, cur, idx) => cur === 0 ? [...pre, idx] : pre, [])
    let count = 0
    while (queue.length) {
        const cur = queue.shift()
        count++
        // 获取后续课
        const next = record.get(cur)
        // 存在后续课
        if (next && next.length) {
            next.forEach(item => {
                // 依赖的后续课入度 - 1, 代表该课程已学
                inDegreeList[item]--
                if (inDegreeList[item] === 0) queue.push(item)
            })
        }
    }
    return count === numCourses
}

console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))
console.log(canFinish(3, [[2, 1], [1, 0], [0, 2]]))
console.log(canFinish(3, [[1, 0], [1, 2], [0, 1]]))
console.log(canFinish(5, [[1, 0], [1, 2], [2, 3], [0, 4]]))
