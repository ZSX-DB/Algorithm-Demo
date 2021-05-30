class CommonPromise {
    constructor() {
        this.value = null

    }

    then(fn) {
        if (fn) {
            setTimeout(() => {
                this.value = fn(this.value)
            })
        }
        return this
    }

}

new CommonPromise().then(() => {
    return 3
}).then(val => {
    console.log(val)
    return val + 11
}).then(val => {
    console.log(val)
    return val + 6
}).then().then(val => {
    console.log(val)
})
