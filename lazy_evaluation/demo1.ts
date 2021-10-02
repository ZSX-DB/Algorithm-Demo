const createLazyFibonacci = function* () {
    let prev = 0
    let next = 1
    while (true) {
        yield prev
        const temp = prev + next
        prev = next
        next = temp
    }
}

const gen = createLazyFibonacci()

for (let i = 0; i < 10; i++) {
    console.log(gen.next().value)
}
