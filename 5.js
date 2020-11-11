/**
 * 5、最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 链接：https://leetcode-cn.com/problems/longest-palindromic-substring/
 */


// function longestPalindrome(s) {
//     let arr = [],
//         sLen = s.length;
//     //分割所有字符串
//     for (let i = 0; i <= sLen; i++) {
//         for (let j = 0; j <= sLen; j++) {
//             arr.push(s.substring(i, j))
//         }
//     }
//
//     // return arr
//
//     let aLen = arr.length,
//         duplicateArr = [];
//     //获取回文字符串
//     for (let k = 0; k < aLen; k++) {
//         if (arr[k] === arr[k].split('').reverse().join('')) {
//             duplicateArr.push(arr[k])
//         }
//     }
//
//     //输出最长的子串
//     return duplicateArr.sort((a, b) => b.length - a.length)[0]
//
// }


function longestPalindrome(s) {
    let len=s.length,
        res='',
        dp=Array.from(new Array(len),()=>new Array(len).fill(0))

    for(let i=len-1;i>=0;i--){
        for(let j=i;j<len;j++){
            dp[i][j]=s[i]===s[j]&&(j-i<2||dp[i+1][j-1])
            if(dp[i][j]&&j-i+1>res.length){
                res=s.substring(i,j+1)
            }
        }
    }

    return res

}



console.log(longestPalindrome('babad'))


