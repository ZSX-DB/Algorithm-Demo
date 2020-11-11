/**
 * 20、有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 链接：https://leetcode-cn.com/problems/valid-parentheses/
 */


function isValid(s) {
    let sLen = s.length,
        arr = [s[0]]
    if (sLen === 0) return true
    if (sLen % 2 !== 0) return false

    for (let i = 1; i < sLen; i++) {

        if (arr[arr.length - 1] === '(' && s[i] === ')') {
            arr.pop()
        } else if (arr[arr.length - 1] === '[' && s[i] === ']') {
            arr.pop()
        } else if (arr[arr.length - 1] === '{' && s[i] === '}') {
            arr.pop()
        } else {
            arr.push(s[i])
        }

    }

    return arr.length === 0

}


let a = '([()])'

console.log(isValid('()[](}'))