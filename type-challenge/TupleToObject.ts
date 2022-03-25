const tuple = ['tesla', 'model 3', 'model X', 'model Y']

type TupleToObject<T extends string[]> = {
    [K in T[number]]: K
}

let result: TupleToObject<typeof tuple>

