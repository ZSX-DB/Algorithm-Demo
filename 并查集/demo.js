/**
 * 并查集
 * 参考链接：https://zhuanlan.zhihu.com/p/93647900
 */

// 基础并查集
class UnionFind {
    constructor(len) {
        this.parent = new Array(len).fill(0).map((_, idx) => idx)
    }

    find(i) {
        return this.parent[i] === i ? i : this.find(this.parent[i])
    }

    union(i, j) {
        this.parent[this.find(i)] = this.find(j)
    }

}
