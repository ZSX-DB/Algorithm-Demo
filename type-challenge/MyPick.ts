interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview1 = Pick<Todo, 'title' | 'completed'>

const todo1: TodoPreview1 = {
    title: 'Clean room',
    completed: false,
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type TodoPreview2 = MyPick<Todo, 'title' | 'completed'>

const todo2: TodoPreview1 = {
    title: 'Clean room',
    completed: false,
}

