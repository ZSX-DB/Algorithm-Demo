class Deps {
    private readonly subscribers: Set<Function>

    constructor() {
        this.subscribers = new Set()
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

let activeEffect: Function | null = null

const targetMap = new WeakMap<object, Map<string | symbol, Deps>>()

const getDep = (target: object, key: string | symbol): Deps => {
    let depsMap = targetMap.get(target)
    if (depsMap === undefined) {
        depsMap = new Map<string | symbol, Deps>()
        targetMap.set(target, depsMap)
    }
    let dep = depsMap.get(key)
    if (dep === undefined) {
        dep = new Deps()
        depsMap.set(key, dep)
    }
    return dep
}

const reactiveHandler = {
    get(target: object, key: string | symbol, receiver: any) {
        const dep = getDep(target, key)
        dep.depend()
        return Reflect.get(target, key, receiver)
    },
    set(target: object, key: string | symbol, value: any, receiver: any) {
        const dep = getDep(target, key)
        const result = Reflect.set(target, key, value, receiver)
        dep.notify()
        return result
    }
}

const reactive = <T extends Object>(raw: T): T => {
    return new Proxy<T>(raw, reactiveHandler)
}

const state = reactive({
    count: 0
})

const watchEffect = (effect: Function) => {
    activeEffect = effect
    effect()
    activeEffect = null
}

watchEffect(() => {
    console.log('=====', state.count, 'count' in state, 'msg' in state)
})

state.count++
