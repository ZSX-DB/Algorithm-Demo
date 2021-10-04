/**
 * 22、括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 链接：https://leetcode-cn.com/problems/generate-parentheses/
 */


// 通过获得所有情况再去除不符合情况的，时间复杂度和空间复杂度均不好
// function generateParenthesis(n) {
//     let arr=[],
//         end=2*n-1
//
//     if(n===0)return []
//
//     const getItem=(start,str)=> {
//         if(start===end){
//             arr.push(str)
//             return arr
//         }
//
//         getItem(start+1,str+'(')
//         getItem(start+1,str+')')
//
//     }
//
//     getItem(0,'(')
//
//     let arrLen=arr.length,
//         itemLen=end+1,
//         temp=0,
//         newArr=[]
//
//     while (temp<arrLen){
//         let tempArr=[]
//         for(let i=0;i<itemLen;i++){
//
//             if(arr[temp][i]===')'&&tempArr[tempArr.length-1]==='('){
//                 tempArr.pop()
//             }else {
//                 tempArr.push(arr[temp][i])
//             }
//
//         }
//         if(tempArr.length===0){
//             newArr.push(arr[temp])
//         }
//
//         temp++
//     }
//
//     return newArr
// }


// 深度优先算法
// 添加需满足2个条件
// 1、左括号 < n
// 2、添加右括号时，左括号数量必须大于右括号数量，并且右括号 < n
function generateParenthesis(n) {
    let arr=[]

    const create=(left,right,str)=> {
        if(left===n&&right===n){
            arr.push(str)
            return arr
        }

        if(left<n){
            create(left+1,right,str+'(')
        }
        if(right<left){
            create(left,right+1,str+')')
        }

    }

    create(0,0,'')

    return arr

}


console.log(generateParenthesis(3))
console.log(generateParenthesis(0))

