class MapSum {
    constructor() {
        this.record = {}
    }

    insert(key, val) {
        let node = this.record
        for (const str of key) {
            if (node[str] === undefined) {
                node[str] = {}
            }
            node = node[str]
        }
        node.val = val
    }

    sum(prefix) {
        let sum = 0
        let node = this.record
        for (const str of prefix) {
            if (node[str] === undefined) {
                return 0
            }
            node = node[str]
        }
        const dfs = node => {
            if (node === undefined) {
                return
            }
            for (const key of Object.keys(node)) {
                if (key === 'val') {
                    sum += node.val
                } else {
                    dfs(node[key])
                }
            }
        }
        dfs(node)
        return sum
    }
}

const ms = new MapSum()
ms.insert('apple', 3)
console.log(ms.sum('ap'))
ms.insert('app', 2)
console.log(ms.sum('ap'))
ms.insert('apple', 7)
console.log(ms.sum('ap'))
