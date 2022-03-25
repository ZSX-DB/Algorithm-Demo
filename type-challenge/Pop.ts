// @ts-ignore
type Pop<T extends any[]> = T extends [...infer P, unknown] ? P : never

// @ts-ignore
type Shift<T extends any[]> = T extends [unknown, ...infer P] ? P : never

// @ts-ignore
type Push<T extends any[], P> = [...T, P]

// @ts-ignore
type Unshift<T extends any[], P> = [P, ...T]


type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
