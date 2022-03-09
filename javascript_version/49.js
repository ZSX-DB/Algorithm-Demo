// 计数
// const groupAnagrams = strs => {
//     const record = new Map()
//     strs.forEach(str => {
//         let count = new Array(26).fill(0)
//         for (const s of str) {
//             count[s.codePointAt(0) - 97]++
//         }
//         count = JSON.stringify(count)
//         record.set(count, record.has(count) ? [...record.get(count), str] : [str])
//     })
//     return [...record.values()]
// }

// 排序
const groupAnagrams = strs => [...strs
    .map(str => str.split('').sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join(''))
    .reduce((record, str, idx) => {
        record.set(str, record.has(str) ? [...record.get(str), strs[idx]] : [strs[idx]])
        return record
    }, new Map()).values()]

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
