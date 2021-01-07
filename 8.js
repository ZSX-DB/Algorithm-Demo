/**
 * 8、字符串转换整数 (atoi)
 * 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
 * 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：
 * 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
 * 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
 * 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
 * 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。
 * 在任何情况下，若函数不能进行有效的转换时，请返回 0 。
 * 提示：本题中的空白字符只包括空格字符 ' ' 。
 * 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。
 * 如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
 * 链接：https://leetcode-cn.com/problems/string-to-integer-atoi/
 */


// 字符处理并判断
// const myAtoi = s => {
//     // 去除空格
//     let firstStr = ''
//     let start = 0
//     let isFirstCarry = false
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') {
//             // 去除前导空格
//             if (i === 0) {
//                 while (s[i] === ' ') {
//                     i++
//                 }
//                 firstStr = s.slice(i)
//                 start = i
//             } else if (s[i - 1] !== ' ') {
//                 // 从空格中间截断
//                 firstStr = s.slice(start, i)
//                 break
//             }
//             isFirstCarry = true
//         }
//     }
//     if (!isFirstCarry) firstStr = s
//
//     // 去除非合法字符串
//     const whiteList = ['+', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//     let secondStr = ''
//     let isSecondCarry = false
//     for (let i = 0; i < firstStr.length; i++) {
//         if (!whiteList.includes(firstStr[i])) {
//             secondStr = firstStr.slice(0, i)
//             isSecondCarry = true
//             break
//         }
//     }
//     if (!isSecondCarry) secondStr = firstStr
//
//     // 去除多余的+号或-号
//     let thirdStr = ''
//     let isThirdCarry = false
//     const signList = ['+', '-']
//     for (let i = 0; i < secondStr.length; i++) {
//         if (signList.includes(secondStr[i]) && i !== 0) {
//             thirdStr = secondStr.slice(0, i)
//             isThirdCarry = true
//             break
//         }
//     }
//     if (!isThirdCarry) thirdStr = secondStr
//
//     // 最终结果
//     let result = Number(thirdStr)
//     if (isNaN(result)) {
//         return 0
//     } else if (result > 2 ** 31 - 1) {
//         result = 2 ** 31 - 1
//     } else if (result < -(2 ** 31)) {
//         result = -(2 ** 31)
//     }
//     return result
// }

// DFS有限状态机
const myAtoi = s => {
    class Automaton {
        constructor() {
            // 执行状态
            this.state = 'start'
            // 正负符号
            this.flag = 1
            // 数值
            this.value = 0
            // 状态更改表
            this.map = new Map([
                ['start', ['start', 'signed', 'in_number', 'end']],
                ['signed', ['end', 'end', 'in_number', 'end']],
                ['in_number', ['end', 'end', 'in_number', 'end']],
                ['end', ['end', 'end', 'end', 'end']]
            ])
        }

        // 根据字符串的内容返回map索引(用于改变state)
        getMapIndex(char) {
            if (char === ' ') {
                // 空格
                return 0
            } else if (['+', '-'].includes(char)) {
                // 运算符
                return 1
            } else if (!isNaN(Number(char))) {
                return 2
            } else {
                return 3
            }
        }

        setResult(char) {
            // 改变状态
            this.state = this.map.get(this.state)[this.getMapIndex(char)]
            if (this.state === 'in_number') {
                // 设置value
                this.value = this.value * 10 + Number(char)
                // 根据正负号判断是否超过范围, 超过范围则设置为临界值
                // 在进行最小值比较时, 会转化成负值, 因此需转换为绝对值
                this.value = Math.abs(this.flag === 1 ? Math.min(2 ** 31 - 1, this.value) : Math.max(-(2 ** 31), -this.value))
            } else if (this.state === 'signed') {
                // 对于符号的判断, 只需判断一次
                this.flag = char === '+' ? 1 : -1
            }
        }

    }

    const automaton = new Automaton()
    for (const char of s) {
        automaton.setResult(char)
    }
    return automaton.flag * automaton.value

}

// parseInt api
// const myAtoi = s => {
//     let result = parseInt(s)
//     if (isNaN(result)) {
//         result = 0
//     } else if (result > 2 ** 31 - 1) {
//         result = 2 ** 31 - 1
//     } else if (result < -(2 ** 31)) {
//         result = -(2 ** 31)
//     }
//     return result
// }

// 正则表达式
// const myAtoi = s => {
//     s = s.trim().match(new RegExp(/^(-|\+)?\d+/))
//     const res = s ? Number(s[0]) : 0
//     return res >= 0 ? Math.min(res, 2 ** 31 - 1) : Math.max(res, -(2 ** 31))
// }


console.log(myAtoi('404'))
console.log(myAtoi('42'))
console.log(myAtoi('   -42'))
console.log(myAtoi('41093 with words'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('-91283472332'))
console.log(myAtoi('+-12'))
console.log(myAtoi('21474836460'))
console.log(myAtoi('00000-42a1234'))
console.log(myAtoi('   +0 123'))
console.log(myAtoi('   -88827   5655  U'))
console.log(myAtoi('-5-'))
console.log(myAtoi('-13+8'))
console.log(myAtoi('++1'))
