const data = [
    {},
    {
        a: {
            b: {
                c: 5
            }
        }
    }
]

// const data = null

console.log(data ?? [])
// data ?? [] 必须有一个括号包括，否则只输出 data
// console.log((data ?? [])[1].a.b.c)

console.log((data ?? [])[1]?.a?.b?.c)
console.log((data ?? [])[1]?.a?.c?.b)
console.log((data || [])[1]?.a?.b?.c)

// ?? 和 || 的区别是 ?? 只判断 null 和 undefined


