const range = (left, right) =>
    Array(right - left + 1)
        .fill(0)
        .map((_, idx) => left + idx)

class ArrayPipe {
    constructor(initArray) {
        this.array = initArray
    }

    operators() {
        const filter = operate => array => array.filter(operate)
        const map = operate => array => array.map(operate)
        return {
            filter,
            map
        }
    }

    pipe(...fns) {
        for (const fn of fns) {
            this.array = fn(this.array)
        }
        return this
    }

    subscribe() {
        return this.array
    }

}

console.log(
    new ArrayPipe(range(3, 21))
        .pipe(
            array => array.filter(x => x % 2 === 1),
            array => array.map(x => x * 2)
        )
        .subscribe()
)

const ap = new ArrayPipe(range(3, 21))
const {
    filter,
    map
} = ap.operators()

console.log(ap.pipe(
    filter(x => x % 2 === 1),
    map(x => x * 2))
    .subscribe()
)






