/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
// const findLongestWord = (s, dictionary) => {
//     dictionary.sort((x, y) => y.length - x.length)
//     const record = []
//     for (const str of dictionary) {
//         let tmpS = s
//         let isSuit = true
//         for (const ch of str) {
//             const idx = tmpS.indexOf(ch) + 1
//             if (idx === 0) {
//                 isSuit = false
//                 break
//             } else {
//                 tmpS = tmpS.substring(idx)
//             }
//         }
//         if (isSuit && str.length >= Math.max(...record.map(str => str.length))) {
//             record.push(str)
//         }
//     }
//     // js 默认字典序排序
//     record.sort()
//     return record.length ? record[0] : ''
// }

const findLongestWord = (s, dictionary) => {
    // localeCompare 验证字典序
    dictionary.sort((x, y) => y.length !== x.length ? y.length - x.length : x.localeCompare(y))
    for (const t of dictionary) {
        let i = 0
        let j = 0
        while (i < s.length && j < t.length) {
            if (s[i] === t[j]) {
                j++
            }
            i++
        }
        if (j >= t.length) {
            return t
        }
    }
    return ''
}


console.log(findLongestWord('abpcplea', ["ale", "apple", "monkey", "plea"]))
console.log(findLongestWord('abpcplea', ['a', 'b', 'c']))
