type MyExclude<T, U> = T extends U ? never : T

type AB = 'a' | 'b'
type BC = 'b' | 'c'
type Demo1 = Exclude<AB, BC> // => type Demo = 'a'
type Demo2 = MyExclude<AB, BC>

const d1: Demo1 = 'a'
const d2: Demo2 = 'a'
