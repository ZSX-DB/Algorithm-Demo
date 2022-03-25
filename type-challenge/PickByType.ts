type PickByType<T, U> = {
    [K in keyof T as (T[K] extends U ? K : never)]: T[K]
}

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

const m1: PickByType<Model, boolean> = {
    isReadonly: true,
    isEnable: false
}

const m2: PickByType<Model, string> = {
    name: ''
}

const m3: PickByType<Model, number> = {
    count: 1
}


// 扩展
type PickBySelected<T, U> = {
    [K in keyof T as (K extends U ? K : never)]: T[K]
}

const m4: PickBySelected<Model, 'isEnable'> = {
    isEnable: true
}


type PickBySelectedList<T, U extends string[]> = {
    [K in keyof T as (K extends U[number] ? K : never)]: T[K]
}

type ExcluedByKeys<T, U extends string[]> = {
    [K in keyof T as (K extends U[number] ? never : K)]: T[K]
}

const m5: PickBySelectedList<Model, ['isEnable', 'name']> = {
    name: '',
    isEnable: true
}

const m6: ExcluedByKeys<Model, ['isEnable', 'name']> ={
    count: 1,
    isReadonly: true
}
