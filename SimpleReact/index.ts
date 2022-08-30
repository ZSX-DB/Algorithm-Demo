type Tag = 'div' | 'span' | 'button' | 'h1'

interface VNode {
    tag: Tag
    props?: {
        click?: () => void
        className?: string
    }
    children: string | number | VNode[]
}

const render = (container: Element, vNode: VNode) => {
    const { tag, props, children } = vNode
    const el: Element = document.createElement(tag)
    if (props !== undefined) {
        for (const [key, value] of Object.entries(props)) {
            if (typeof value === "string") {
                el.setAttribute(key, value)
            } else {
                el.addEventListener(key, value)
            }
        }
    }
    if (Array.isArray(children)) {
        children.forEach(child => {
            render(el, child)
        })
    } else {
        el.textContent = String(children)
    }
    container.appendChild(el)
}

const update = () => {
    const app = document.querySelector('#app')
    app.innerHTML = ''
    render(app, createTree())
}

const useRef = <T>(initState: T) => {
    let state = {
        value: initState
    }
    const setState = (newState: T): void => {
        state.value = newState
        update()
    }
    return [state, setState] as const
}

const [count, setCount] = useRef(0)

const createTree = (): VNode => {
    return {
        tag: 'div',
        children: [
            {
                tag: 'h1',
                children: 'Title'
            },
            {
                tag: 'button',
                props: {
                    click: () => {
                        setCount(count.value + 1)
                    }
                },
                children: 'btn'
            },
            {
                tag: 'span',
                children: count.value
            }
        ]
    }
}

update()

export { }

