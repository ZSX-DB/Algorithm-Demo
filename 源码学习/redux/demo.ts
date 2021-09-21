interface Action {
    type: string,

    [key: string]: any
}

interface InfoAction extends Action {
    name?: string,
    description?: string
}

type Middleware = (store: any) => (next: Function) => (action: Action) => any

const combineReducers = (reducers: object) => {
    const keys = Object.keys(reducers)
    return (state = {}, action) => {
        const nextState = {}
        for (const key of keys) {
            const reducer = reducers[key]
            nextState[key] = reducer(state[key], action)
        }
        return nextState
    }
}

class Store {
    public readonly reducer: any
    public state: any
    public listeners: Function[]

    constructor(reducer, initState) {
        this.reducer = reducer
        this.state = initState
        this.listeners = []
    }

    subscribe(listener: Function) {
        this.listeners.push(listener)
    }

    unsubscribe(listener: Function) {
        this.listeners = this.listeners.filter(item => item !== listener)
    }

    getState = () => this.state

    dispatch = (action: Action) => {
        this.state = this.reducer(this.state, action)
        for (const listener of this.listeners) {
            listener()
        }
    }

    applyMiddleware(middleware: Middleware) {
        const next = this.dispatch
        // 最小开放原则，只需要提供 getState 方法
        const simpleStore = {
            getState: this.getState
        }
        this.dispatch = middleware(simpleStore)(next)
    }

    applyManyMiddleware(...manyMiddleware: Middleware[]) {
        const simpleStore = {
            getState: this.getState
        }
        let next = this.dispatch
        for (const middleware of manyMiddleware) {
            this.dispatch = middleware(simpleStore)(next)
            next = this.dispatch
        }
    }

}

const countReducer = (state, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
const infoReducer = (state, action: InfoAction) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action?.name
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action?.description
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    count: countReducer,
    info: infoReducer
})

const initState = {
    count: 0,
    info: {
        name: '',
        description: ''
    }
}

const store = new Store(reducer, initState)
const listener = () => {
    console.log('subscribe', store.getState())
}

store.subscribe(listener)

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'SET_NAME',
    name: 'front_end'
})

store.dispatch({
    type: 'INCREMENT'
})

// 扩展中间件功能
const loggerMiddleware = store => (next: Function) => (action: Action) => {
    console.log('Call action', action.type)
    next(action)
}

const timestampMiddleware = store => (next: Function) => (action: Action) => {
    console.log('Call timer', new Date().getTime())
    next(action)
}


// 独立 store 作为参数是为了保证中间件的独立性
const contrastMiddleware = store => (next: Function) => (action: Action) => {
    console.log('previous', store.getState())
    next(action)
    console.log('next', store.getState())
}

// 取消订阅
store.unsubscribe(listener)

// 使用中间件
store.applyMiddleware(loggerMiddleware)
store.applyManyMiddleware(timestampMiddleware, contrastMiddleware)


store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'SET_DESCRIPTION',
    description: 'this is the description'
})





