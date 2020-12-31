/**
 * 224、基本计算器
 * 实现一个基本的计算器来计算一个简单的字符串表达式 s 的值。
 * 链接：https://leetcode-cn.com/problems/basic-calculator/
 */

const calculate = s => {
    // 去除空格, 转化为字符串数组, 数字字符串转换为数字
    const sList = s.replace(/\s*/g, '').split('').map(item => !isNaN(Number(item)) ? Number(item) : item)

    const calc = arr => {
        // 反转字符串
        arr.reverse()
        const list = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                let base = 0
                let num = arr[i] * (10 ** base)
                while (typeof arr[i] === "number") {
                    if (typeof arr[i + 1] !== "number") break
                    base++
                    i++
                    num += arr[i] * (10 ** base)
                }
                list.push(num)
            } else {
                list.push(arr[i])
            }
        }
        list.reverse()
        let res
        const getVal = start => {
            for (let i = start; i < list.length; i++) {
                if (typeof list[i] === "string") {
                    switch (list[i]) {
                        case '+':
                            res += list[i + 1]
                            break
                        case '-':
                            res -= list[i + 1]
                            break
                    }
                }
            }
        }
        if( list[0] === "+"){
            res = list[1]
            getVal(2)
        }else if (list[0] === '-'){
            res = -list[1]
            getVal(2)
        }else {
            res = list[0]
            getVal(1)
        }
        return res
    }


    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (sList[i] === ')') {
            const list = stack.splice(stack.lastIndexOf('('))
            list.shift()
            stack.push(calc(list))
        } else {
            stack.push(sList[i])
        }
    }
    return calc(stack)
}

console.log(calculate('1 - (2 -(76 - 3))+10-25'))
console.log(calculate('(1+(4+5+2)-3)+(6+8)'))
console.log(calculate('1+1'))
console.log(calculate('2-1+2'))
console.log(calculate('-(3 + (4 + 5))'))
console.log(calculate('+(3 + (4 + 5))'))
