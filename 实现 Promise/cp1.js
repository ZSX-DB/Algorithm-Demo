const PENDING = 0
const FULFILLED = 1
const REJECTED = 2


/**
 * 检查一个值是否为 Promise , 若为 Promise 则返回该 Promise 的 then
 * @param {Promise|any} value 
 * @return {Function|null}
 */
const getThen = value => {
    const type = typeof value
    if (value && (type === 'object' || type === 'function')) {
        const then = value.then
        if (typeof then === 'function') return then
    }
    return null
}

const doResolve = (fn, onFulfilled, onRejected) => {
    let done = false
    try {
        fn(value => {
            if (done) return
            done = true
            onFulfilled(value)
        }, reason => {
            if (done) return
            done = true
            onRejected(reason)
        })
    } catch (error) {
        if (done) return
        done = true
        onRejected(error)
    }
}

class CustomPromise {
    constructor(fn) {
        // 存储该 CustomPromise 的状态信息
        this.state = PENDING
        // 存储 FULFILLED 或 REJECTED 时带来的数据
        this.value = null
        // 存储 then 或 done 时调用的成功或失败回调
        this.handlers = []
        this.resolve = this.resolve.bind(this)

        doResolve(fn, this.resolve, this.reject)
    }

    fulfill(result) {
        this.state = FULFILLED
        this.value = result
    }

    reject(error) {
        this.state = REJECTED
        this.value = error
    }

    resolve(result) {
        try {
            const then = getThen(result)
            if (then) {
                doResolve(then.bind(result), this.resolve, this.reject)
                return
            }
            this.fulfill(result)
        } catch (error) {
            this.reject(error)
        }
    }

    // 保证 done 中回调的执行
    handle(handler) {
        if (this.state === PENDING) {
            this.handlers.push(handler)
        } else {
            if (this.state === FULFILLED && typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(this.value)
            }
            if (this.state === REJECTED && typeof handler.onRejected === 'function') {
                handler.onRejected(this.value)
            }
        }
    }

    done(onFulfilled, onRejected) {
        // 保证 done 总是异步执行
        setTimeout(() => {
            this.handle({
                onFulfilled,
                onRejected
            })
        }, 0)
    }

    then(onFulfilled, onRejected) {
        const _this = this
        return new CustomPromise((resolve, reject) => {
            return _this.done(
                result => {
                    if (typeof onFulfilled === 'function') {
                        try {
                            return resolve(onFulfilled(result))
                        } catch (error) {
                            return reject(error)
                        }
                    } else {
                        return resolve(result)
                    }
                }, error => {
                    if (typeof onRejected === 'function') {
                        try {
                            return resolve(onRejected(error))
                        } catch (error) {
                            return reject(error)
                        }
                    } else {
                        return reject(error)
                    }
                })
        })
    }


}


new CustomPromise((resolve, reject) => {
    resolve(223)
}).then(val => {
    console.log(val)
    return val + 5
}).then(val => {
    console.log(val)
    return val - 3
}).then(val => {
    console.log(val)
})
