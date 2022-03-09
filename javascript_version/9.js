/**
 * 9、回文数
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 链接：https://leetcode-cn.com/problems/palindrome-number/
 */

// function isPalindrome(x) {
//     if(x<0){
//         return false;
//     }else {
//         return x === parseInt(x.toString().split('').reverse().join(''));
//     }
// }


// function isPalindrome(x) {
//     if (x < 0) return false;
//     if (x < 10) return true;
//
//     //left初始为x的总位数
//     let left=0,right=1,sum=x;
//     //算出总位数
//     while (sum>=1){
//         sum/=10;
//         left++
//     }
//
//     //获取第n位的数
//     let getNum=(x,n)=>Math.floor(x%Math.pow(10,n)/Math.pow(10,n-1))
//
//     //双指针
//     while (left>right){
//         if(getNum(x,left)!==getNum(x,right)){
//             return false
//         }
//         left--;
//         right++
//     }
//
//     return true
//
// }

function isPalindrome(x) {
    let s = x, rs = 0
    while (s > 0) {
        rs = rs * 10 + s % 10
        s = Math.floor(s / 10)
    }
    return rs === x
}


let getNum = (x, n) => Math.floor(x % Math.pow(10, n) / Math.pow(10, n - 1))

console.log(isPalindrome(707), getNum(3564, 4))