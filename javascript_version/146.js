// 判断是否存在，存在删除再建立，是为了维持引用的顺序（改变 Map 内部的顺序）
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.collect = new Map()
    }

    get(key) {
        if (this.collect.has(key)) {
            const val = this.collect.get(key)
            this.collect.delete(key)
            this.collect.set(key, val)
            return val
        } else {
            return -1
        }
    }

    put(key, value) {
        if (this.collect.has(key)) this.collect.delete(key)
        this.collect.set(key, value)
        if (this.collect.size > this.capacity) this.collect.delete(this.collect.keys().next().value)
    }

}


const lru = new LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
console.log(lru.get(1))
lru.put(3, 3)
console.log(lru.get(2))
lru.put(4, 4)
console.log(lru.get(1))
console.log(lru.get(3))
console.log(lru.get(4))

// const lru = new LRUCache(2)
// lru.put(2, 1)
// lru.put(2, 2)
// console.log(lru.collect, lru.useQueue)
// console.log(lru.get(2))
// lru.put(1, 1)
// lru.put(4, 1)
// console.log(lru.collect, lru.useQueue)
// console.log(lru.get(2))
