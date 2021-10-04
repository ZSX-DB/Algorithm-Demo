/**
 * 706、设计哈希映射
 * 不使用任何内建的哈希表库设计一个哈希映射
 * 具体地说，你的设计应该包含以下的功能
 * put(key, value)：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
 * get(key)：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
 * remove(key)：如果映射中存在这个键，删除这个数值对。
 * 链接：https://leetcode-cn.com/problems/design-hashmap/
 */

// js对象模拟(实际不符合题意)
// class MyHashMap {
//     constructor() {
//         this.map = {}
//     }
//
//     put(key, value) {
//         this.map[key] = value
//     }
//
//     get(key) {
//         return this.map[key] || String(this.map[key]) === '0' ? this.map[key]: -1
//     }
//
//     remove(key) {
//         delete this.map[key]
//     }
//
// }


// 取模 + 数组
/**
 * 以下是模拟的数据结构
 * 数组长度为 2069
 * 0 ---
 * 1 ---{key: 1, val: ...} --- { key: 2070, val: ... }
 * 2
 * 3
 * ...
 */


class MyHashMap {
    constructor() {
        // 使用了质数来减少哈希碰撞
        this.len = 2069
        this.hash = this.init(this.len)
    }

    getListNode() {
        class LinkNode {
            constructor(key, val) {
                this.key = key
                this.val = val
                this.next = null
            }
        }

        return LinkNode
    }

    init() {
        const LinkNode = this.getListNode()
        const list = new Array(this.len)
        for (let i = 0; i < this.len; i++) {
            list[i] = new LinkNode()
        }
        return list
    }

    put(key, value) {
        const ListNode = this.getListNode()
        const n = key % this.len
        // 判断是否已经存在,如果存在则覆盖
        let isKeyExist = false
        let head = this.hash[n]
        while (head.next) {
            head = head.next
            if (head.key === key) {
                isKeyExist = true
                head.val = value
            }
        }
        if (!isKeyExist) head.next = new ListNode(key, value)
    }

    get(key) {
        const n = key % this.len
        let head = this.hash[n]
        while (head.next) {
            head = head.next
            if (head.key === key) return head.val
        }
        return -1
    }

    remove(key) {
        const n = key % this.len
        let head = this.hash[n]
        while (head && head.next) {
            if (head.next.key === key) head.next = head.next.next
            head = head.next
        }
    }

}

const hashMap = new MyHashMap()
hashMap.put(1, 1)
hashMap.put(2, 2)
console.log(hashMap.get(1))
console.log(hashMap.get(3))
hashMap.put(2, 1)
console.log(hashMap.get(2))
hashMap.remove(2)
console.log(hashMap.get(2))
