// 双指针
// const compress = chars => {
//     const len = chars.length
//     // 未压缩的头部
//     let start = 0
//     // 已压缩结果的末尾
//     let end = 0
//     while (start < len) {
//         chars[end] = chars[start]
//         const tmp = start
//         while (start < len && chars[start] === chars[end]) {
//             start++
//         }
//         end++
//         if (start - tmp > 1) {
//             const distance = String(start - tmp).split('')
//             for (let i = 0; i < distance.length; i++) {
//                 chars[end] = distance[i]
//                 end++
//             }
//         }
//     }
//     return end
// }

const compress = chars => {
    let len = chars.length - 1
    let flag = chars.shift()
    let count = 1
    while (len > 0) {
        const shift = chars.shift()
        if (flag === shift) {
            count++
        } else {
            count === 1 ? chars.push(flag) : chars.push(flag, ...String(count).split(''))
            count = 1
            flag = shift
        }
        len--
    }
    count === 1 ? chars.push(flag) : chars.push(flag, ...String(count).split(''))
    return chars.length
}


console.log(compress(['a']))
console.log(compress(["a", "b", "b", "c", "c", "c"]))
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))
