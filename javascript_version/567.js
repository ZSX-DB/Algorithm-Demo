// 回溯找出所有可能再判断，效率低，会超时
// const checkInclusion = (s1, s2) => {
//     const len = s1.length
//     const vis = new Array(len).fill(false)
//     const list = []
//     const collect = (str = '') => {
//         if (str.length === len) {
//             list.push(str)
//             return
//         }
//         for (let i = 0; i < len; i++) {
//             if (vis[i] || (i > 0 && s1[i] === s1[i - 1] && !vis[i - 1])) continue
//             str += s1[i]
//             vis[i] = true
//             collect(str)
//             str = str.substring(0, str.length - 1)
//             vis[i] = false
//         }
//     }
//     collect()
//     return list.some(item => s2.includes(item))
// }

// 缺点，每次都得全量比较
// const checkInclusion = (s1, s2) => {
//     const len1 = s1.length
//     const len2 = s2.length
//     if (len1 > len2) return false
//
//     const cnt1 = new Array(26).fill(0)
//     const cnt2 = new Array(26).fill(0)
//
//     for (let i = 0; i < len1; i++) {
//         cnt1[s1.charCodeAt(i) - 97]++
//         cnt2[s2.charCodeAt(i) - 97]++
//     }
//
//     if (JSON.stringify(cnt1) === JSON.stringify(cnt2)) return true
//
//     for (let i = len1; i < len2; i++) {
//         cnt2[s2.charCodeAt(i) - 97]++
//         cnt2[s2.charCodeAt(i - len1) - 97]--
//         if (JSON.stringify(cnt1) === JSON.stringify(cnt2)) return true
//     }
//
//     return false
//
// }

// 增类减量比较
// const checkInclusion = (s1, s2) => {
//     const len1 = s1.length
//     const len2 = s2.length
//     const cnt = new Array(26).fill(0)
//
//     for (let i = 0; i < len1; i++) {
//         cnt[s1.charCodeAt(i) - 97]--
//         cnt[s2.charCodeAt(i) - 97]++
//     }
//     let diff = 0
//     for (const n of cnt) {
//         if (n !== 0) diff++
//     }
//
//     if (diff === 0) return true
//
//     for (let i = len1; i < len2; i++) {
//         const x = s2.charCodeAt(i) - 97
//         const y = s2.charCodeAt(i - len1) - 97
//
//         if (x === y) continue
//
//         if (cnt[x] === 0) diff++
//         cnt[x]++
//         if (cnt[x] === 0) diff--
//
//         if (cnt[y] === 0) diff++
//         cnt[y]--
//         if (cnt[y] === 0) diff--
//
//         if (diff === 0) return true
//
//     }
//
//     return false
//
// }

// 双指针(效率最高)
const checkInclusion = (s1, s2) => {
    const len1 = s1.length
    const len2 = s2.length
    const cnt = new Array(26).fill(0)

    for (let i = 0; i < len1; i++) {
        cnt[s1.charCodeAt(i) - 97]--
    }

    let left = 0

    for (let right = 0; right < len2; right++) {
        const x = s2.charCodeAt(right) - 97
        cnt[x]++

        while (cnt[x] > 0) {
            cnt[s2.charCodeAt(left) - 97]--
            left++
        }

        if (right - left + 1 === len1) return true

    }

    return false

}


console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaoo'))
console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'))

