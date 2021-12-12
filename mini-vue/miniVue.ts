type Tag = 'div' | 'span'

type HObject = {
    tag: Tag
    props: null | object
    children?: string | HObject[]
    el?: Element
}

/**
 * Transfer params
 * @param tag
 * @param props
 * @param children
 */
const h = (tag: Tag, props, children?: string | HObject[]) => ({
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
            el.setAttribute(key, value)
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

const vDom1 = h('div', {class: 'red'}, [
    h('span', null, 'hello')
])

const vDom2 = h('div', {class: 'green'}, [
    h('span', null, 'world')
])

mount(vDom1, document.querySelector('#app') as Element)

setTimeout(() => {
    patch(vDom1, vDom2)
}, 1000)
