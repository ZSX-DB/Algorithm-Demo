// const findRepeatedDnaSequences = s => {
//     const collect = new Map()
//     const res = []
//     for (let i = 0; i <= s.length - 10; i++) {
//         const cur = s.slice(i, 10 + i)
//         if (collect.get(cur) === 1) res.push(cur)
//         collect.set(cur, collect.has(cur) ? collect.get(cur) + 1 : 1)
//     }
//     return res
// }

const findRepeatedDnaSequences = s => {
    if (s.length <= 10) return []
    const charMap = {
        A: 0,
        C: 1,
        G: 2,
        T: 3
    }
    const res = []
    const map = new Map()
    // 单独拿出 sum 是因为每连续10个字符组成的子串，有9位都是一样的，仅有1位不一样, 因此可以利于位操作，基于 sum[i] 迅速求出 sum[i+1]
    let sum = 0
    for (let i = 0; i < 10; i++) {
        sum = sum * 4 + charMap[s[i]]
    }
    map.set(sum, 1)
    for (let i = 1; i <= s.length - 10; i++) {
        // 以s[i]开头的10个字符对应的数值满足 [一共20bit，需要与0xfffff相与]
        sum = ((sum << 2) & 0xfffff) + charMap[s[i + 9]]
        if (map.get(sum) === 1) res.push(s.slice(i, i + 10))
        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
    }
    return res
}
