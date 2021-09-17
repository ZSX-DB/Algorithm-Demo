// class BiMap {
//     constructor(kvList) {
//         this.map = new Map()
//         this.handleKVList(kvList)
//     }
//
//     handleKVList(kvList) {
//         for (const [kv1, kv2] of kvList) {
//             this.add(kv1, kv2)
//         }
//     }
//
//     add(kv1, kv2) {
//         this.map.set(kv1, kv2)
//         this.map.set(kv2, kv1)
//     }
//
//     get(key) {
//         return this.map.get(key)
//     }
//
// }

class BiMap {
    constructor(kvList) {
        this.map = new Map()
        this.reverseMap = new Map()
        this.handleKVList(kvList)
    }

    handleKVList(kvList) {
        for (const [kv1, kv2] of kvList) {
            this.add(kv1, kv2)
        }
    }

    add(kv1, kv2) {
        this.map.set(kv1, kv2)
        this.reverseMap.set(kv2, kv1)
    }

    get(key) {
        if (this.map.has(key)) {
            return this.map.get(key)
        } else if (this.reverseMap.has(key)) {
            return this.reverseMap.get(key)
        } else {
            return undefined
        }
    }

}

const bm = new BiMap([['lc', 'leetcode'], ['pipe', 'pipe']])

bm.add('Win', 'windows')
bm.add('navigation', 'nav')

console.log(bm.get('leetcode'))
console.log(bm.get('lc'))
console.log(bm.get('pipe'))
console.log(bm.get('Win'))
console.log(bm.get('nav'))
