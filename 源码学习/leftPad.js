/**
 * LeftPad Function
 * @param str
 * @param len
 * @param ch
 * @returns {*}
 *
 */
// const leftPad = (str, len, ch) => {
//     len = len - str.length
//     while (len--) {
//         str = ch + str
//     }
//     return str
// }

// 逻辑与 leftPad 源码一样，但 leftPad 使用了位运算，在len长度越大的情况下效率相比上方法效率更高
const leftPad = (str, len, ch) => {
    len = len - str.length
    let pad = ''
    while (len) {
        if (len % 2) pad += ch
        len = Math.floor(len / 2)
        if (len) ch += ch
    }
    str = pad + str
    return str
}


console.log(leftPad('hhhh', 10, 'c'))
console.log(leftPad('hhhh', 11, 'c'))
