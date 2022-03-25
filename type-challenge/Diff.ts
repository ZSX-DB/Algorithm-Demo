type Foo = {
    name: string
    age: string
}
type Bar = {
    name: string
    age: string
    gender: number
}

const k1: Exclude<keyof Bar, keyof Foo> = 'gender'

type Diff<O, O1> = O extends O1 ? {[K in Exclude<keyof O, keyof O1>]: O[K]} : {[K in Exclude<keyof O1, keyof O>]: O1[K]}

const d1: Diff<Foo, Bar> = {
    gender: 3
}

const d2: Diff<Bar, Foo> = {
    gender: 5
}
