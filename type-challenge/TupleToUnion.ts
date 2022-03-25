type TupleToUnion<T extends any[]> = T[number]

const n1: TupleToUnion<['str', true, 3]> = 'str'
