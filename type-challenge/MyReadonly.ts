interface Todo {
    title: string
    description: string
}

const todo1: Readonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

const todo2: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}
