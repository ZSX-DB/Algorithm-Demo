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
        const rand = () => array => {
            let end = array.length - 1
            while (end >= 0) {
                const rand = Math.floor(Math.random() * (end + 1));
                [array[end], array[rand]] = [array[rand], array[end]]
                end--
            }
            return array
        }
        const sortBigToSmall = () => array => array.sort((x, y) => y - x)
        const sortSmallToBig = () => array => array.sort((x, y) => x - y)
        return {
            filter,
            map,
            rand,
            sortBigToSmall,
            sortSmallToBig
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
    map,
    rand,
    sortBigToSmall,
    sortSmallToBig
} = ap.operators()

console.log(ap.pipe(
    filter(x => x % 2 === 1),
    map(x => x * 2),
    rand(),
    sortBigToSmall(),
    sortSmallToBig()
    ).subscribe()
)

// ============================= Function =============================
const pipe = (initVal, ...fns) => fns.reduce(
    (outputVal, currFn) => currFn(outputVal), initVal
)

const filterFn = array => array.filter(x => x % 2 === 1)
const mapFn = array => array.map(x => x * 2)
const uniqFn = array => [...new Set(array)]

console.log(pipe([...range(3, 21), ...range(7, 17)], uniqFn, filterFn, mapFn))







