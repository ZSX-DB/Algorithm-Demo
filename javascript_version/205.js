/**
 * 205、同构字符串
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 链接：https://leetcode-cn.com/problems/isomorphic-strings/
 */


// 错误测试用例: 'abab' 'abba'，正确结果为false
// const isIsomorphic = (s, t) => {
//     const len = s.length
//     const sObj = {}
//     const tObj = {}
//     for (let i = 0; i < len; i++) {
//         sObj[s[i]] ? sObj[s[i]]++ : sObj[s[i]] = 1
//         tObj[t[i]] ? tObj[t[i]]++ : tObj[t[i]] = 1
//     }
//     console.log(sObj, tObj)
//     return JSON.stringify(Object.values(sObj)) === JSON.stringify(Object.values(tObj))
// }

// 错误测试用例: '13' '42'，正确结果为true
// 错误原因: object在只有字符串键的对象上进行迭代将按插入顺序产生键。
// const isIsomorphic = (s, t) => {
//     const len = s.length
//     const sObj = {}
//     const tObj = {}
//     for (let i = 0; i < len; i++) {
//         sObj[s[i]] ? sObj[s[i]].push(i) : sObj[s[i]] = [i]
//         tObj[t[i]] ? tObj[t[i]].push(i) : tObj[t[i]] = [i]
//     }
//     return JSON.stringify(Object.values(sObj)) === JSON.stringify(Object.values(tObj))
// }

// 错误测试用例: 'ab' 'aa'(维护单个对象时报错，因此解决方案双对象)
// const isIsomorphic = (s, t) => {
//     const len = s.length
//     const sObj = {}
//     const tObj = {}
//     for (let i = 0; i < len; i++) {
//         if (!sObj[s[i]]) {
//             sObj[s[i]] = t[i]
//         } else if (sObj[s[i]] !== t[i]) {
//             return false
//         }
//         if (!tObj[t[i]]) {
//             tObj[t[i]] = s[i]
//         } else if (tObj[t[i]] !== s[i]) {
//             return false
//         }
//     }
//     return true
// }

// map优化
// const isIsomorphic = (s, t) => {
//     const len = s.length
//     const sm = new Map()
//     const tm = new Map()
//     for (let i = 0; i < len; i++) {
//         if (!sm.get(s[i])) sm.set(s[i], t[i])
//         if (!tm.get(t[i])) tm.set(t[i], s[i])
//         if (sm.get(s[i]) !== t[i] || tm.get(t[i]) !== s[i]) return false
//     }
//     return true
// }

// 利用js的api
// const isIsomorphic = (s, t) => {
//     const len = s.length
//     for (let i = 0; i < len; i++) {
//         if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
//     }
//     return true
// }

// 利用数组
const isIsomorphic = (s, t) => {
    const sl = []
    const tl = []
    for (let i = 0; i < s.length; i++) {
        const sv = s.codePointAt(i)
        const tv = t.codePointAt(i)
        if (sl[sv] && sl[sv] !== tv || tl[tv] && tl[tv] !== sv) return false
        sl[sv] = tv
        tl[tv] = sv
    }
    return true
}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('abab', 'abba'))
console.log(isIsomorphic('13', '42'))
console.log(isIsomorphic('ab', 'aa'))
