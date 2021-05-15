/**
 * 优化
 * 1 路径压缩
 * * 将其父节点设置为根节点(减少搜索次数)
 * 2 按秩合并(即深度小的树往深度大的树合并, 减少搜索次数, 而不是相反)
 * * rank 秩 使用 rank 记录深度(可认为是空间换时间)
 * --------------------------------------------------------
 * 由于路径压缩会破坏深度, 即破坏正确的对应秩, 因此两者并不能同用
 */
class UnionFindZip {
    constructor(len) {
        this.parent = new Array(len).fill(0).map((_, idx) => idx)
    }

    find(i) {
        // 路径压缩, 将其父节点设置为根节点
        // 由于路径压缩只在查询时进行，也只压缩一条路径，因此并查集最终的结构可能并非 2 层
        if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])
        return this.parent[i]
    }

    union(i, j) {
        this.parent[this.find(i)] = this.find(j)
    }

}

class UnionFindRank {
    constructor(len) {
        this.parent = new Array(len).fill(0).map((_, idx) => idx)
        this.rank = new Array(len).fill(1)
    }

    find(i) {
        return this.parent[i] === i ? i : this.find(this.parent[i])
    }

    union(i, j) {
        // 先获取根节点
        const x = this.find(i)
        const y = this.find(j)
        this.rank[x] <= this.rank[y] ? this.parent[x] = y : this.parent[y] = x
        // 如果深度相同且根节点不同, 则新的根节点的深度 + 1
        if (this.rank[x] === this.rank[y] && x !== y) this.rank[y]++
    }

}
