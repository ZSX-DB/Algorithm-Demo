// 暴力匹配
// class WordDictionary {
//     constructor() {
//         this.collection = []
//     }
//
//     addWord(word) {
//         this.collection.push(word)
//     }
//
//     search(word) {
//         return this.collection.some(item => item.length === word.length && this.match(item, word))
//     }
//
//     match(str, word) {
//         for (let idx = 0; idx < word.length; idx++) {
//             if (word[idx] !== str[idx] && word[idx] !== '.') return false
//         }
//         return true
//     }
//
// }

// 字典树
class WordDictionary {
    constructor() {
        this.root = {}
    }

    addWord(word) {
        let cur = this.root
        for (const ch of word) {
            if (!cur[ch]) cur[ch] = {}
            cur = cur[ch]
        }
        cur.end = true
    }

    search(word) {
        return this.match(word, this.root)
    }

    match(word, cur) {
        for (let i = 0; i < word.length; i++) {
            const ch = word[i]
            if (ch === '.') {
                for (const key in cur) {
                    // 关键步骤
                    if (cur.hasOwnProperty(key) && this.match(word.slice(i + 1, word.length), cur[key])) return true
                }
                return false
            } else if (!cur[ch]) {
                return false
            }
            cur = cur[ch]
        }
        return Boolean(cur.end)
    }

}


const wd = new WordDictionary()
wd.addWord('bad')
wd.addWord('dad')
wd.addWord('mad')
console.log(wd.search('pad'))
console.log(wd.search('bad'))
console.log(wd.search('.ad'))
console.log(wd.search('b..'))
