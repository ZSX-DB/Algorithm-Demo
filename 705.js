/**
 * 705、有效的字母异位词
 * 不使用任何内建的哈希表库设计一个哈希集合
 * 具体地说，你的设计应该包含以下的功能
 *   add(value)：向哈希集合中插入一个值。
 *   contains(value) ：返回哈希集合中是否存在这个值。
 *   remove(value)：将给定值从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 * 链接：https://leetcode-cn.com/problems/design-hashset/
 */


// 数组实现
class HashSetByArray {
    constructor() {
        this.list = []
    }

    add(key) {
        if (!this.contains(key) && 0 <= key && key <= 1000000) this.list.push(key)
    }

    contains(key) {
        return this.list.includes(key)
    }

    remove(key) {
        this.list = this.list.filter(item => item !== key)
    }
}

let h1 = new HashSetByArray()
h1.add(3)
h1.add(4)

console.log(h1.contains(3), h1.contains(4), h1.contains(5))

h1.remove(4)
console.log(h1.contains(3), h1.contains(4), h1.contains(5))

// map实现（在频繁增删键值对的场景下表现更好）
class HashSetByMap {
    constructor() {
        this.map = new Map()
    }

    add(key) {
        this.map.set(key, key)
    }

    contains(key) {
        return this.map.has(key)
    }

    remove(key) {
        this.map.delete(key)
    }
}


let h2 = new HashSetByMap()
h2.add(3)
h2.add(4)

console.log(h2.contains(3), h2.contains(4), h2.contains(5))

h2.remove(4)
console.log(h2.contains(3), h2.contains(4), h2.contains(5))