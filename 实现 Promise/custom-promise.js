const PENDING = 0
const FULFILLED = 1
const REJECTED = 2


/**
 * 检查一个值是否为 Promise , 若为 Promise 则返回该 Promise 的 then
 * @param {Promise|all} value
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
        let state = PENDING
        // 存储 FULFILLED 或 REJECTED 时带来的数据
        let value = null
        // 存储 then 或 done 时调用的成功或失败回调
        let handlers = []

        const fulfill = result => {
            state = FULFILLED
            value = result
        }

        const reject = error => {
            state = REJECTED
            value = error
        }

        const resolve = (result) => {
            try {
                const then = getThen(result)
                if (then) {
                    doResolve(then.bind(result), resolve, reject)
                    return
                }
                fulfill(result)
            } catch (error) {
                reject(error)
            }
        }

        // 保证 done 中回调的执行
        const handle = handler => {
            if (state === PENDING) {
                handlers.push(handler)
            } else {
                if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
                    handler.onFulfilled(value)
                }
                if (state === REJECTED && typeof handler.onRejected === 'function') {
                    handler.onRejected(value)
                }
            }
        }

        this.done = (onFulfilled, onRejected) => {
            // 保证 done 总是异步执行
            setTimeout(() => {
                handle({
                    onFulfilled,
                    onRejected
                })
            }, 0)
        }

        this.then = (onFulfilled, onRejected) => {
            const _this = this
            return new CustomPromise((resolve, reject) => _this.done(
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
                }))
        }

        doResolve(fn, resolve, reject)
    }

}

new CustomPromise(resolve => {
    resolve(223)
}).then(val => {
    console.log(val)
    return val + 5
}).then(val => {
    console.log(val)
    return val - 2
}).then(val => {
    console.log(val)
})
