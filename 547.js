// 并查集
// const findCircleNum = isConnected => {
//     const n = isConnected.length
//     const parent = new Array(n).fill(0).map((_, idx) => idx)
//     const find = i => parent[i] === i ? i : find(parent[i])
//     const union = (i, j) => parent[find(i)] = find(j)
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (isConnected[i][j] === 1) union(i, j)
//         }
//     }
//     return parent.reduce((pre, cur, idx) => cur === idx ? pre + 1 : pre, 0)
// }


class UnionFind {
    constructor(len) {
        this.parent = new Array(len).fill(0).map((_, idx) => idx)
        this.rank = new Array(len).fill(1)
    }

    find(i) {
        if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])
        return this.parent[i]
    }

    union(i, j) {
        this.parent[this.find(i)] = this.find(j)
    }

}

// 并查集(使用类)
// const findCircleNum = isConnected => {
//     const n = isConnected.length
//     const uf = new UnionFind(n)
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (isConnected[i][j] === 1) uf.union(i, j)
//         }
//     }
//     return uf.parent.reduce((pre, cur, idx) => cur === idx ? pre + 1 : pre, 0)
// }

// 深度优先搜索
const findCircleNum = isConnected => {
    const visited = new Set()
    const dfs = index => {
        isConnected[index].forEach((cur, idx) => {
            if (cur === 1 && visited.has(idx) === false) {
                visited.add(idx)
                dfs(idx)
            }
        })
    }
    return isConnected.reduce((pre, _, idx) => {
        if (visited.has(idx) === false) {
            dfs(idx)
            pre++
        }
        return pre
    }, 0)
}

console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(findCircleNum([[1, 1, 1], [1, 1, 1], [1, 1, 1]]))
console.log(findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]))
