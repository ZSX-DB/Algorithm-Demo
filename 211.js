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
//         let flag = true
//         str.split('').forEach((item, idx) => {
//             if (word[idx] !== item && word[idx] !== '.') flag = false
//         })
//         return flag
//     }
//
// }

class WordDictionary {
    constructor() {
        this.root = {}
    }

    addWord(word) {
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
            if(ch !== '.'){
                tmp = tmp[ch]
                if (tmp === undefined) return false
            }
        }
        return !!tmp['end']
    }

    match(word) {
        let tmp = this.root
        for (const ch of word) {
            if(ch !== '.'){
                tmp = tmp[ch]
                if (tmp === undefined) return false
            }
        }
        return true
    }

}

// abcd abeg

const wd = new WordDictionary()
wd.addWord('bad')
wd.addWord('dad')
wd.addWord('mad')
console.log(wd.search('pad'))
console.log(wd.search('bad'))
console.log(wd.search('.ad'))
console.log(wd.search('b..'))

let obj = {
    a: 1,
    b: 2
}
console.log(Object.entries(obj))

// console.log('abc')

// abc a..
// abc .a.
