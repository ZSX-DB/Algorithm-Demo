type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false

const b1: StartsWith<'abc', 'ac'> = false
const b2: StartsWith<'abc', 'ab'> = true
const b3: StartsWith<'abc', 'abcd'> = false