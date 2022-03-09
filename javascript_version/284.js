class Iterator {
    constructor(list) {
        this.list = list
        this.idx = -1
    }

    next() {
        this.idx++
        return this.list[this.idx]
    }

    hasNext() {
        return this.idx < this.list.length - 1
    }
}

// class PeekingIterator {
//     constructor(iterator) {
//         this.iterator = iterator
//         // 判断有没有使用缓存的 peekResult
//         this.unuse = false
//         this.peekResult = -1
//         this.peekHasResult = false
//     }
//
//     peek() {
//         if (this.unuse) {
//             return this.peekResult
//         } else {
//             this.unuse = true
//             this.peekResult = this.iterator.next()
//             this.peekHasResult = (this.peekResult !== undefined)
//             return this.peekResult
//         }
//     }
//
//     next() {
//         if (this.unuse) {
//             this.unuse = false
//             return this.peekResult
//         } else {
//             return this.iterator.next()
//         }
//     }
//
//     hasNext() {
//         if (this.unuse) {
//             return this.peekHasResult
//         } else {
//             return this.iterator.hasNext()
//         }
//     }
// }

class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator
        this.unuse = false
        this.peekResult = -1
    }

    peek() {
        if (this.unuse) {
            return this.peekResult
        } else {
            this.unuse = true
            this.peekResult = this.iterator.next()
            return this.peekResult
        }
    }

    next() {
        if (this.unuse) {
            this.unuse = false
            return this.peekResult
        } else {
            return this.iterator.next()
        }
    }

    hasNext() {
        return this.unuse || this.iterator.hasNext()
    }
}

const iterator = new Iterator([1, 2, 3])
// console.log(iterator.next())
// console.log(iterator.hasNext())
// console.log(iterator.next())
// console.log(iterator.hasNext())
// console.log(iterator.next())
// console.log(iterator.hasNext())

const pi = new PeekingIterator(iterator)
console.log(pi.next())
console.log(pi.peek())
console.log(pi.peek())
console.log(pi.next())
console.log(pi.next())
console.log(pi.hasNext())
