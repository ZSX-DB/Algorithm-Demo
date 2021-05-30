const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

class CommonPromise {
    constructor(executor) {
        // bind 绑定 this 丢失
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        // 初始状态
        this.state = PENDING
        // 存储数据
        this.value = null
        this.reason = null
        // 执行器，默认执行, 需要放置于最后让数据初始化完毕
        executor(this.resolve, this.reject)
    }

    resolve(value) {
        if (this.state === PENDING) {
            this.state = FULFILLED
            this.value = value
        }
    }

    reject(reason) {
        this.state = REJECTED
        this.reason = reason
    }

    then(onFulfilled, onRejected) {
        if (this.state === FULFILLED) {
            onFulfilled(this.value)
        } else if (this.state === REJECTED) {
            onRejected(this.reason)
        }
    }

    // then(func) {
    //     setTimeout(() => {
    //         this.value = func(this.value)
    //     })
    //     return this
    // }

}

// const cp1 = new CommonPromise(resolve => {
//     resolve(3)
// })
//
// cp1.then(val => {
//     console.log('onFulfilled', val)
// })

const cp1 = new CommonPromise(resolve => {
    resolve(3)
})

cp1.then(val => {
    console.log('onFulfilled', val)
})

const cp2 = new CommonPromise((resolve, reject) => {
    reject('fail')
})

cp2.then(val => {
    console.log('onFulfilled', val)
}, reason => {
    console.log(reason)
})


// cp.then(val => {
//     console.log(val)
//     return val + 2
// }).then(val => {
//     console.log(val)
//     return val + 5
// }).then(val => {
//     console.log(val)
// })

