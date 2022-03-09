// const countVowelStrings = n => (n + 4) * (n + 3) * (n + 2) * (n + 1) / 24

const countVowelStrings = n => {
    // a e i o u 分别代表各自字母开头的数量，a能跟前一项的所有组合，e可以与前一项e i o u开头的组合，以此类推，u永远只有一个
    let a = 1
    let e = 1
    let i = 1
    let o = 1
    let u = 1

    for (let idx = 1; idx < n; idx++) {
        a = a + e + i + o + u
        e = e + i + o + u
        i = i + o + u
        o = o + u
    }
    return a + e + i + o + u
}

console.log(countVowelStrings(4))