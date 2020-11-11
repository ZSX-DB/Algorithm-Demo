/**
 * 6、Z字形变换
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 链接：https://leetcode-cn.com/problems/zigzag-conversion/
 */

// function convert(s, numRows) {
//
//     if(numRows===1){
//         return s
//     }
//
//     let childLen = numRows * 2 - 2,
//         sLen = s.length,
//         arrNum = Math.ceil(sLen / childLen),
//         arr = [],
//         newArr = [];
//     for (let i = 0; i < arrNum; i++) {
//         arr.push(s.substring(i * childLen, (i + 1) * childLen))
//     }
//
//     for (let j = 0; j < arrNum; j++) {
//         for (let k = 0; k < childLen; k++) {
//             if (k < numRows) {
//                 let data = k !== childLen - k ? `${arr[j][k] === undefined ? '' : arr[j][k]}${arr[j][childLen - k] === undefined ? '' : arr[j][childLen - k]}` : `${arr[j][k] === undefined ? '' : arr[j][k]}`
//                 newArr.push(data)
//             }
//         }
//     }
//
//     let nLen=newArr.length,
//         target='',
//         unitNum=nLen/numRows;
//     for(let i=0;i<numRows;i++){
//         for(let j=0;j<unitNum;j++){
//             target+=newArr[j*numRows+i]
//         }
//     }
//
//     return target
//
// }


// 整体的思路是遍历字符串，遍历过程中将每行都看成新的字符串构成字符串数组，最后再将该数组拼接起来即可
// 如果 numRows=1 则说明当前字符串即为结果，直接返回
// 否则整个字符串需要经历，向下向右，向下向右，这样的反复循环过程，设定 down 变量表示是否向下，loc 变量表示当前字符串数组的下标
// 如果 down 为 true，则 loc+=1，字符串数组下标向后移动，将当前字符加入当前字符串中
// 如果 down 为 false，则表示向右，则 loc−=1，字符串数组下标向前移动，将当前字符加入当前字符串中
// 时间复杂度：O(n)，n为字符串s的长度


function convert(s, numRows) {

    if (numRows === 1) {
        return s
    }

    let minLen = Math.min(s.length, numRows),
        rows = [],
        loc = 0,
        down = false,
        target = '';

    for (let i = 0; i < minLen; i++) {
        rows[i] = ''
    }

    for (const item of s) {
        rows[loc] += item;
        if (loc === 0 || loc === (numRows - 1)) {
            down = !down;
        }
        loc += down ? 1 : -1
    }

    for (const row of rows) {
        target += row
    }

    return target

}


let str0 = 'LEETCODEISHIRING'
let str1 = 'LEETCODEISHIRING'
console.log(convert(str0, 3))

