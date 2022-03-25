// 更高级的 readonly2

type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [key in K]: T[key];
} & {
    [key in Exclude<keyof T, K>]: T[key]
}

interface Todo {
    title: string
    description: string
}

const todo1: MyReadonly2<Todo, 'title'> = {
    title: "Hey",
    description: "foobar"
}

// Error
// todo1.title = 'T'
todo1.description = 'else'



