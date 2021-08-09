/**
 * 6、Z字形变换
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 链接：https://leetcode-cn.com/problems/zigzag-conversion/
 */

const convert = (s, numRows) => {
    if (numRows === 1) return s
    let flag = 0
    const list = Array(numRows).fill('')
    let up = true
    for (let i = 0; i < s.length; i++) {
        list[flag] += s[i]
        if (flag < numRows) {
            up ? flag++ : flag--
        }
        if (flag === numRows) {
            flag -= 2
            up = false
        }
        if (flag === 0) {
            up = true
        }
    }
    return list.join('')
}

console.log(convert('PAYPALISHIRING', 3))

