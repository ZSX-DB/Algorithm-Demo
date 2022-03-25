// 表示在 extends 条件语句中待推断的类型变量
type Awaited<T extends Promise<unknown>> = T extends Promise<infer R> ? R : never


type X = Promise<string>
type Y = Promise<{ field: number }>

const x: Awaited<X> = 'str'
const y: Awaited<Y> = {
    field: 3
}
