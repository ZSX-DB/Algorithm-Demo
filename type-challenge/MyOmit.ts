interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview1 = Omit<Todo, 'description' | 'title'>

const todo1: TodoPreview1 = {
    completed: false
}

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type TodoPreview2 = MyOmit<Todo, 'description' | 'title'>

const todo2: TodoPreview2 = {
    completed: false,
}
