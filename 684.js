// 不断合并无效边
// const findRedundantConnection = edges => {
//     let lastLen = edges
//     let record = new Map()
//     const handle = () => {
//         edges.forEach(cur => {
//             record.set(cur[0], (record.get(cur[0]) || 0) + 1)
//             record.set(cur[1], (record.get(cur[1]) || 0) + 1)
//         })
//         edges = edges.filter(cur => !(record.get(cur[0]) === 1 || record.get(cur[1]) === 1))
//         if (lastLen === edges.length) {
//             return true
//         } else {
//             lastLen = edges.length
//             record = new Map()
//             return false
//         }
//     }
//     while (true) {
//         const res = handle()
//         if (res) return edges[lastLen - 1]
//     }
// }

// 并查集
const findRedundantConnection = edges => {
    const parent = new Array(edges.length + 1).fill(0).map((_, idx) => idx)
    const find = (idx) => parent[idx] === idx ? idx : find(parent[idx])
    const union = (idx1, idx2) => {
        parent[find(idx1)] = find(idx2)
    }
    for (const [x, y] of edges) {
        if(find(x) === find(y)) return [x, y]
        union(x, y)
    }
}

// 并查集 (使用类)
// const findRedundantConnection = edges => {
//     class UnionFind {
//         constructor(len) {
//             this.parent = new Array(len).fill(0).map((_, idx) => idx)
//         }
//
//         find(i) {
//             return this.parent[i] === i ? i : this.find(this.parent[i])
//         }
//
//         union(i, j) {
//             this.parent[this.find(i)] = this.find(j)
//         }
//     }
//
//     const uf = new UnionFind(edges.length + 1)
//     for (const [x, y] of edges) {
//         if (uf.find(x) !== uf.find(y)) {
//             uf.union(x, y)
//         } else {
//             return [x, y]
//         }
//     }
// }


console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))
console.log(findRedundantConnection([[1, 3], [3, 4], [1, 5], [3, 5], [2, 3]]))
console.log(findRedundantConnection([[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]))
