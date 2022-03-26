// 暴力法，不通过
// class MapSum {
//     private readonly record: Map<string, number>
//
//     constructor() {
//         this.record = new Map()
//     }
//
//     insert(key: string, val: number): void {
//         this.record.set(key, val)
//     }
//
//     sum(prefix: string): number {
//         let sum = 0
//         this.record.forEach((val, key) => {
//             if (key.includes(prefix)) {
//                 sum += val
//             }
//         })
//         return sum
//     }
// }

// 前缀哈希树
class MapSum {
    private readonly record: Map<string, number>
    private readonly sumMap: Map<string, number>

    constructor() {
        this.record = new Map()
        this.sumMap = new Map()
    }

    insert(key: string, val: number): void {
        let prefix = ''
        if (this.record.has(key)) {
            const diff = val - this.record.get(key)
            for (const str of key) {
                prefix += str
                this.sumMap.set(prefix, this.sumMap.get(prefix) + diff)
            }
        } else {
            for (const str of key) {
                prefix += str
                this.sumMap.set(prefix, (this.sumMap.get(prefix) || 0) + val)
            }
        }
        this.record.set(key, val)
    }

    sum(prefix: string): number {
        return this.sumMap.get(prefix) || 0
    }
}

const ms = new MapSum()
ms.insert('apple', 3)
console.log(ms.sum('ap'))
ms.insert('app', 2)
console.log(ms.sum('ap'))
ms.insert('apple', 7)
console.log(ms.sum('ap'))

