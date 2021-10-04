/**
 * 844、比较含退格的字符串
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 链接：https://leetcode-cn.com/problems/backspace-string-compare
 */


// 栈解法
function backspaceCompare(S, T) {
    const getValue = str => {
        let strArr = str.split(''), newArr = []
        strArr.forEach(item => item !== '#' ? newArr.push(item) : newArr.pop())
        return newArr.join('').toString()
    }
    return getValue(S) === getValue(T)
}


// 双指针解法
// function backspaceCompare(S, T) {
//     let s = S.length - 1,
//         t = T.length - 1,
//         skipS = 0,
//         skipT = 0
//
//     while (s >= 0 || t >= 0) {
//
//         while (s >= 0) {
//             if (S.charAt(s) === '#') {
//                 skipS++
//                 s--
//             } else if (skipS > 0) {
//                 skipS--
//                 s--
//             } else {
//                 break
//             }
//         }
//         while (t >= 0) {
//             if (T.charAt(t) === '#') {
//                 skipT++
//                 t--
//             } else if (skipT > 0) {
//                 skipT--
//                 t--
//             } else {
//                 break
//             }
//         }
//
//         if (s >= 0 && t >= 0 && S.charAt(s) !== T.charAt(t)) return false
//
//         if ((s >= 0) !== (t >= 0)) return false
//
//         s--
//         t--
//
//     }
//
//     return true
//
// }


console.log(backspaceCompare("a##c", "#a#c"), backspaceCompare("a#c", "b"))
