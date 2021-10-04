let parent = []

// 初始化
const init = len => {
    while (len--) {
        parent[len] = len
    }
}

// 查询 (查询其父节点)
const find = x => parent[x] === x ? x : find(parent[x])

// 合并
const union = (i, j) => {
    parent[find(i)] = find(j)
}

init(10)
console.log(parent)
union(2, 1)
console.log(parent)
union(2, 3)
console.log(parent)
union(2, 4)
console.log(parent)
