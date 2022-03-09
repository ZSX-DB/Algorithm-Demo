/**
 * 17、电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

function letterCombinations(digits) {
    let len=digits.length,
        digitsStr=digits.toString(),
        res=[],
        phone={
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }

    if(digitsStr.length===0) return []

    const backtrack=(i,str)=> {
        if(i===len){
            res.push(str)
            return
        }
        let temp=phone[digitsStr[i]]
        for(let j=0;j<temp.length;j++){
            backtrack(i+1,str+temp[j])
        }
    }

    backtrack(0,'')
    return res

}

console.log(letterCombinations(''))



