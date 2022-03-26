class Trie {
    private readonly root: object

    constructor() {
        this.root = {}
    }

    insert(word: string): void {
        let curr = this.root
        for (const ch of word) {
            if (curr[ch] === undefined) {
                curr[ch] = {}
            }
            curr = curr[ch]
        }
        curr['end'] = true
    }

    search(word: string): boolean {
        let curr = this.root
        for (const ch of word) {
            if (curr[ch] === undefined) {
                return false
            } else {
                curr = curr[ch]
            }
        }
        return curr.hasOwnProperty('end')
    }

    startsWith(prefix: string): boolean {
        let curr = this.root
        for (const ch of prefix) {
            if (curr[ch] === undefined) {
                return false
            } else {
                curr = curr[ch]
            }
        }
        return true
    }
}

const trie = new Trie()
trie.insert('apple')
console.log(trie.search('apple'))
console.log(trie.search('app'))
console.log(trie.startsWith('app'))
trie.insert('app')
console.log(trie.search('app'))
