const fn = (strs1, strs2) => {

}
const strs1 = ['a', 'b', 'c']
const strs2 = ['d', 'e', 'f']
const result = []

for(const s1 of strs1) {
    for(const s2 of strs2) {
        result.push(s1 + s2)
    }
}

console.log(strs1.reduce((prev, curr) => {
    prev.push(...strs2.map(str => curr + str))
    return prev
}, []))

console.log(result)
