/**
 * Custom Promise
 * 参考链接：
 * https://juejin.cn/post/6945319439772434469
 * https://juejin.cn/post/6924188714419634190
 * 根据定义，then 中的回调是被传入微任务队列中
 */
const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

const resolvePromise = (promiseCopy, res, resolve, reject) => {
    // 如果相同则为循环引用，返回 TypeError
    if (promiseCopy === res) return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    // 判断是否为 CustomPromise 实例
    if (res instanceof CustomPromise) {
        // 调用 then，目的是改变状态为 FULFILLED 或 REJECTED
        res.then(resolve, reject)
    } else {
        resolve(res)
    }
}

class CustomPromise {
    constructor(executor) {
        // bind 绑定避免 this 丢失
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        // 初始状态
        this.state = PENDING
        // 存储数据
        this.value = null
        this.reason = null
        // 存储成功或失败回调函数，用于处理异步或 setTimeout 等宏任务
        this.onFulfilledCallback = []
        this.onRejectedCallback = []
        // 执行器，默认执行，需要放置于最后让数据初始化完毕，try catch 添加错误处理
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value) {
        if (this.state === PENDING) {
            this.state = FULFILLED
            this.value = value
            // 判断成功回调是否存在，如果存在就调用
            while (this.onFulfilledCallback.length) {
                this.onFulfilledCallback.shift()(value)
            }
        }
    }

    reject(reason) {
        if (this.state === PENDING) {
            this.state = REJECTED
            this.reason = reason
            // 判断失败回调是否存在，如果存在就调用
            while (this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(reason)
            }
        }
    }

    then(onFulfilled, onRejected) {

        // 实现参数可选
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : error => {
            throw error
        }

        const promiseCopy = new CustomPromise((resolve, reject) => {
            switch (this.state) {
                case FULFILLED:
                    queueMicrotask(() => {
                        try {
                            const res = onFulfilled(this.value)
                            resolvePromise(promiseCopy, res, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case REJECTED:
                    queueMicrotask(() => {
                        try {
                            const res = onRejected(this.reason)
                            resolvePromise(promiseCopy, res, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case PENDING:
                    this.onFulfilledCallback.push(() => {
                        queueMicrotask(() => {
                            try {
                                const res = onFulfilled(this.value)
                                resolvePromise(promiseCopy, res, resolve, reject)
                            } catch (error) {
                                reject(error)
                            }
                        })
                    })
                    this.onRejectedCallback.push(() => {
                        queueMicrotask(() => {
                            try {
                                const res = onRejected(this.reason)
                                resolvePromise(promiseCopy, res, resolve, reject)
                            } catch (error) {
                                reject(error)
                            }
                        })
                    })
                    break
            }
        })
        return promiseCopy
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    static resolve(parameter) {
        if (parameter instanceof CustomPromise) return parameter
        return new CustomPromise(resolve => {
            resolve(parameter)
        })
    }

    static reject(reason) {
        return new CustomPromise((_, reject) => {
            reject(reason)
        })
    }

}

// -------------------------------------------------------------    测试链式调用 No. 1

// const promise = new CustomPromise((resolve, reject) => {
//     resolve('success')
// })

// const other = () => new CustomPromise((resolve, reject) => {
//     resolve('other')
// })

// promise.then(value => {
//     console.log(1)
//     console.log('resolve', value)
//     return other()
// }).then(value => {
//     console.log(2)
//     console.log('resolve', value)
// })

// -------------------------------------------------------------    测试链式调用 No. 2

// new CustomPromise(resolve => {
//     resolve(223)
// }).then(val => {
//     console.log(val)
//     return val + 5
// }).then(val => {
//     console.log(val)
//     return val - 2
// }).then(val => {
//     console.log(val)
//     return val + 74
// })

// -------------------------------------------------------------    测试循环引用

// const promise = new CustomPromise((resolve, reject) => {
//     resolve(100)
// })
// const p1 = promise.then(value => {
//     console.log(value)
//     return p1
// })
// p1.then(value => {
//     console.log(2)
//     console.log('resolve', value)
// }, reason => {
//     console.log(3)
//     console.log(reason.message)
// })

// -------------------------------------------------------------    测试捕捉执行器错误

// new CustomPromise((resolve, reject) => {
//     throw new Error('Executor Error')
// }).then(val => {
//     console.log(val)
// }, reason => {
//     console.log(reason.message)
// })

// -------------------------------------------------------------    测试 then 执行错误

// new CustomPromise(resolve => {
//     resolve(333)
// }).then(val => {
//     console.log(val)
//     // 一个未定义的变量
//     console.log(un)
// }).then(val => {
//     console.log(1)
//     console.log(val)
// }, reason => {
//     console.log(2)
//     console.log(reason.message)
// })

// -------------------------------------------------------------    测试参数可选

// new CustomPromise(resolve => {
//     resolve(223)
// })
//     .then(val => {
//         console.log(val)
//         return val + 5
//     })
//     .then(val => {
//         console.log(val)
//         return val - 2
//     })
//     .then(val => {
//         console.log(val)
//         return val + 74
//     })
//     .then()
//     .then()
//     .then(val => {
//         console.log('last', val)
//     })

// -------------------------------------------------------------    测试静态属性

// CustomPromise.resolve().then(() => {
//     console.log(0)
//     return CustomPromise.resolve(4)
// }).then(val => {
//     console.log(val)
// })

// -------------------------------------------------------------    测试 catch

const cp = new CustomPromise((_, reject) => {
    reject('fail')
})

cp.catch(reason => {
    console.log('reason', reason)
}).then(() => {
    console.log('middle')
    return 10
}).then(value => {
    console.log(value)
}).then(() => {
    console.log('end')
    throw Error('End error')
}).catch(reason => {
    console.log(reason.message)
})
