type Chainable<T = {}> = {
    option<K extends string, V extends any>(key: K, value: V): Chainable<T & { [key in K]: V }>
    get(): T
}