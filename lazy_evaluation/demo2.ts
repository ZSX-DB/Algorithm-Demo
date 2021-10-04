////////////////////////////////////////////////////
// 参考 https://zhuanlan.zhihu.com/p/26535479
//     https://juejin.cn/post/6844903684866834440
////////////////////////////////////////////////////

const repeat = function* <T>(item: T) {
    while (true) {
        yield item
    }
}

const cycle = function* <T>(items: Iterable<T>) {
    while (true) {
        yield* [...items]
    }
}

const iterate = function* <T>(fn: (value: T) => T, initial: T) {
    let val = initial
    while (true) {
        yield val
        val = fn(val)
    }
}

const range = function* (start: number, end = Infinity, step = 1) {
    while (start <= end) {
        yield start
        start += step
    }
}

const map = function* <T, U>(items: Iterable<T>, fn: (value: T) => U) {
    for (const item of items) {
        yield fn(item)
    }
}

const filter = function* <T>(items: Iterable<T>, predicate: (value: T) => boolean) {
    for (const item of items) {
        if (predicate(item)) {
            yield item
        }
    }
}

const take = function* <T>(items: Iterable<T>, n: number) {
    let i = 0
    if (n < 1) {
        return
    }
    for (const item of items) {
        if (i < n) {
            yield item
            i++
        }
    }
}

const takeWhile = function* <T>(predicate: (value: T) => boolean, items: Iterable<T>) {
    for (let item of items) {
        if (predicate(item)) {
            yield item
        }
    }
}

class LazyEvaluation {
    private iterator: null | Generator<any>

    constructor() {
        this.iterator = null
    }

    range(start, end) {
        this.iterator = range(start, end)
        return this
    }

    map(fn: (value: any) => any) {
        this.iterator = map(this.iterator, fn)
        return this
    }

    filter<T>(predicate: (value: T) => boolean) {
        this.iterator = filter(this.iterator, predicate)
        return this
    }

    take(n: number) {
        this.iterator = take(this.iterator, n)
        return this
    }

    end() {
        return this.iterator
    }

    [Symbol.iterator]() {
        return this.iterator
    }
}

console.log('================ nums1 ================')

const nums1 = take(filter(map(range(1, 15), x => x * 10), x => x > 50), 5)

for (let i = 0; i < 5; i++) {
    console.log(nums1.next().value)
}

console.log('================ nums2 ================')

const nums2 = new LazyEvaluation().range(1, 15).map(x => x * 10).filter(x => x > 50).take(5)

for (const num of nums2) {
    console.log(num)
}

console.log('================ nums3 ================')

const nums3 = new LazyEvaluation().range(1, 15).map(x => x * 10).filter(x => x > 50).take(5).end()

console.log(nums3.next().value)
console.log(nums3.next().value)

for (const num of nums3) {
    console.log(num)
}
