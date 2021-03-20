class Trie {
    constructor() {
        this.root = {}
    }

    insert(word) {
        let tmp = this.root
        for (const ch of word) {
            if (!tmp[ch]) tmp[ch] = {}
            tmp = tmp[ch]
        }
        tmp['end'] = true
    }

    search(word) {
        let tmp = this.root
        for (const ch of word) {
            tmp = tmp[ch]
            if (tmp === undefined) return false
        }
        return !!tmp['end']
    }

    startsWith(word) {
        let tmp = this.root
        for (const ch of word) {
            tmp = tmp[ch]
            if (tmp === undefined) return false
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
