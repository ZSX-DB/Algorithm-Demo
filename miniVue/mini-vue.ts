type Tag = 'div' | 'span' | 'h1'

type HObject = {
    tag: Tag
    props: null | object
    children?: string | HObject[]
    el?: Element
}

type Component = {
    data: object
    render: () => HObject
}

/**
 * Transfer params
 * @param tag
 * @param props
 * @param children
 */
const h = (tag: Tag, props: null | object, children?: string | HObject[]): HObject => ({
    tag,
    props,
    children
})

/**
 * Mount
 * @param vNode
 * @param container
 */
const mount = (vNode: HObject, container: Element): void => {
    const {tag, props, children} = vNode
    const el: Element = document.createElement(tag)
    vNode.el = el

    if (props) {
        for (const [key, value] of Object.entries(props)) {
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), value)
            } else {
                el.setAttribute(key, value)
            }
        }
    }
    if (children) {
        if (typeof children === 'string') {
            el.textContent = children
        } else {
            children.forEach(child => {
                mount(child, el)
            })
        }
    }
    container.appendChild(el)
}

/**
 * Patch vNode
 * @param vn1
 * @param vn2
 */
const patch = (vn1: HObject, vn2: HObject) => {
    const el = vn1.el as Element
    vn2.el = el
    if (vn1.tag === vn2.tag) {
        // patch props
        const oldProps = vn1.props ?? {}
        const newProps = vn2.props ?? {}
        for (const key in newProps) {
            const oldValue = oldProps[key]
            const newValue = newProps[key]
            if (newValue !== oldValue) {
                el.setAttribute(key, newValue)
            }
        }
        for (const key in oldProps) {
            if (!(key in newProps)) {
                el.removeAttribute(key)
            }
        }
        // patch children
        const oldChildren = vn1.children
        const newChildren = vn2.children
        if (typeof oldChildren === 'string' && typeof newChildren === 'string') {
            if (newChildren !== oldChildren) {
                el.textContent = newChildren
            }
        } else if (typeof oldChildren === 'string' && typeof newChildren !== 'string') {
            el.innerHTML = ''
            newChildren.forEach(child => {
                mount(child, el)
            })
        } else if (typeof oldChildren !== 'string' && typeof newChildren === 'string') {
            el.textContent = newChildren
        } else if (typeof oldChildren !== 'string' && typeof newChildren !== 'string') {
            // The most complex branch, all arrays
            const commonLength = Math.min(oldChildren.length, newChildren.length)
            for (let i = 0; i < commonLength; i++) {
                patch(oldChildren[i], newChildren[i])
            }
            if (oldChildren.length > commonLength) {
                oldChildren.slice(commonLength).forEach(child => {
                    el.removeChild(child.el)
                })
            } else if (newChildren.length > commonLength) {
                newChildren.slice(commonLength).forEach(child => {
                    mount(child, el)
                })
            }
        }
    } else {
        // ...replace
    }
}

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

const watchEffect = (effect: Function) => {
    activeEffect = effect
    effect()
    activeEffect = null
}


const App = {
    data: reactive({
        count: 0
    }),
    render() {
        return h('h1', {
            onClick: () => {
                App.data.count++
            }
        }, String(App.data.count))
    }
}

const mountApp = (component: Component, container: Element) => {
    let isMounted: boolean = false
    let prevVDom: HObject
    watchEffect(() => {
        if (isMounted === false) {
            prevVDom = component.render()
            mount(prevVDom, container)
            isMounted = true
        } else {
            const newVDom = component.render()
            patch(prevVDom, newVDom)
            prevVDom = newVDom
        }
    })
}

mountApp(App, document.querySelector('#app'))
