/**
 * 22、括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 链接：https://leetcode-cn.com/problems/generate-parentheses/
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => n === 1 ? ['()'] : [...new Set(generateParenthesis(n - 1).map(item => {
    const record = []
    for (let i = 0; i <= item.length; i++) {
        record.push(`${item.substring(0, i)}()${item.substring(i, item.length)}`)
    }
    return record
}).flat(1))]


console.log(generateParenthesis(3))
console.log(generateParenthesis(1))

