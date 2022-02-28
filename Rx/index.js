class Observable {
    constructor(_subscribe) {
        this._subscribe = _subscribe;
    }
    subscribe(observer) {
        const subscriber = new Subscriber(observer);
        subscriber.add(this._subscribe(subscriber));
        return subscriber;
    }
}

class Subscription {
    constructor() {
        this._teardowns = []
    }
    unsubscribe() {
        this._teardowns.forEach((teardown) => {
            teardown()
        })
    }
    add(teardown) {
        this._teardowns.push(teardown)
    }
}

class Subscriber extends Subscription {
    constructor(observer) {
        super();
        this.observer = observer;
        this.isStopped = false;
    }
    next(value) {
        if (this.observer.next && !this.isStopped) {
            this.observer.next(value)
        }
        // if (this.observer.next && !this.isStopped) {
        //     this.observer.next(value);
        // }
    }
    error(value) {
        this.isStopped = true;
        if (this.observer.error) {
            this.observer.error(value);
        }
    }
    complete() {
        this.isStopped = true;
        if (this.observer.complete) {
            this.observer.complete();
        }
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}

const source = new Observable((observer) => {
    let i = 0;
    const timer = setInterval(() => {
        observer.next(++i);
    }, 1000);
    return () => {
        clearInterval(timer)
    }
    // return {
    //     unsubscribe: () => {
    //         clearInterval(timer)
    //     }
    // }
    // return function unsubscribe() {
    //     clearInterval(timer);
    // };
});
const subscription = source.subscribe({
    next: (v) => console.log(v),
    error: (err) => console.error(err),
    complete: () => console.log('complete'),
});

setTimeout(() => {
    subscription.unsubscribe();
}, 4500);

