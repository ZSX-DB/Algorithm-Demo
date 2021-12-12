let activeEffect: Function

class Deps<T> {
    private subscribers: Set<Function>
    private _value: T

    constructor(value: T) {
        this.subscribers = new Set()
        this._value = value
    }

    get value(): T {
        this.depend()
        return this._value
    }

    set value(newValue: T) {
        this._value = newValue
        this.notify()
    }

    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect)
        }
    }

    notify() {
        this.subscribers.forEach(effect => {
            effect()
        })
    }

}


const watchEffect = (effect: Function) => {
    activeEffect = effect
    effect()
    activeEffect = null
}

const ok = new Deps<boolean>(true)
const msg = new Deps<string>('Hello world')


watchEffect(() => {
    if (ok.value) {
        console.log(msg.value)
    }
})

msg.value = 'change'
