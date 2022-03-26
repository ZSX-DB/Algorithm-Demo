// 按行排序
// const convert = (s: string, numRows: number): string => {
//     if (numRows === 1 || numRows >= s.length) {
//         return s
//     }
//     let isDown: boolean = true
//     let pointer: number = 0
//     const strList = new Array<string>(numRows).fill('')
//     for (const ch of s) {
//         strList[pointer] += ch
//         if (pointer === numRows - 1) {
//             isDown = false
//         } else if (pointer === 0) {
//             isDown = true
//         }
//         isDown ? pointer++ : pointer--
//     }
//     return strList.join('')
// }

// 按行访问
const convert = (s: string, numRows: number): string => {
    if (numRows === 1 || numRows >= s.length) {
        return s
    }
    const length: number = s.length
    const cycleLen: number = 2 * numRows - 2
    let result: string = ''
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < length; j += cycleLen) {
            result += s[i + j]
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < length) {
                result += s[j + cycleLen - i]
            }
        }
    }
    return result
}

console.log(convert('PAYPALISHIRING', 3))


