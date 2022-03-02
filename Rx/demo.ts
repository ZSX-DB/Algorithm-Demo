type Teardown = () => void

type Observer = {
    next?: (val: any) => void
    error?: (err: any) => void
    complete?: () => void
}

type SubscribeFn = (observer: Observer) => (() => void)

class Subscription {
    private readonly teardowns: Teardown[]

    constructor() {
        this.teardowns = []
    }

    add(teardown: Teardown) {
        this.teardowns.push(teardown)
    }

    unsubscribe() {
        this.teardowns.forEach(teardown => {
            teardown()
        })
    }

}

class Subscriber extends Subscription {
    private observer: Observer
    private isStopped: boolean

    constructor(observer: Observer) {
        super()
        this.observer = observer
        this.isStopped = false
    }

    next(val): void {
        if (this.observer.next && this.isStopped === false) {
            this.observer.next(val)
        }
    }

    error(err): void {
        this.isStopped = true
        this.observer?.error(err)
    }

    complete(): void {
        this.isStopped = true
        this.observer?.complete()
        this?.unsubscribe()
    }

}

class Observable {
    private readonly subscribeFn: SubscribeFn

    constructor(subscribeFn: SubscribeFn) {
        this.subscribeFn = subscribeFn
    }

    subscribe(observer: Observer) {
        const subscriber = new Subscriber(observer)
        subscriber.add(this.subscribeFn(subscriber))
        return subscriber
    }

}

const source = new Observable((observer) => {
    let i = 0;
    const timer = setInterval(() => {
        observer.next(++i)
    }, 1000)
    return () => {
        clearInterval(timer)
    }
})
const subscription = source.subscribe({
    next: (v) => {
        console.log(v)
    },
    error: (err) => console.error(err),
    complete: () => console.log('complete')
})

setTimeout(() => {
    subscription.unsubscribe()
}, 4500)
