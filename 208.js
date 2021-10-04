class Trie {
    constructor() {
        this.root = {}
    }

    insert(word) {
        let cur = this.root
        for (const ch of word) {
            if (!cur[ch]) cur[ch] = {}
            cur = cur[ch]
        }
        cur.end = true
    }

    search(word) {
        let cur = this.root
        for (const ch of word) {
            cur = cur[ch]
            if (cur === undefined) return false
        }
        return !!cur.end
    }

    startsWith(word) {
        let cur = this.root
        for (const ch of word) {
            cur = cur[ch]
            if (cur === undefined) return false
        }
        return true
    }

}


const trie = new Trie()
trie.insert('hello')
trie.insert('apple')
trie.insert('app')
console.log(trie.search('hell'))
console.log(trie.search('helloa'))
console.log(trie.search('hello'))
console.log(trie.startsWith('hell'))
console.log(trie.startsWith('helloa'))
console.log(trie.startsWith('hello'))
console.log(trie.startsWith('hellz'))
console.log(trie.startsWith('ggg'))
