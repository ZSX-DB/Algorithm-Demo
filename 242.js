/**
 * 242、有效的字母异位词
 * 给定两个字符串 p 和 q ，编写一个函数来判断 p 是否是 q 的字母异位词。
 * 链接：https://leetcode-cn.com/problems/valid-anagram/
 */




// function isSameTree(p, q) {
//     let pArr=p.split('').sort(),
//         qArr=q.split('').sort(),
//         pLen=pArr.length,
//         qLen=qArr.length
//     if(pLen!==qLen){
//         return false
//     }else {
//         for(let i=0;i<pLen;i++){
//             if(pArr[i]!==qArr[i]){
//                 return false
//             }
//         }
//     }
//     return true
// }

// 效率更高
function isSameTree(p, q) {
    let pArr = p.split(''),
        qArr = q.split(''),
        pLen = pArr.length,
        qLen = qArr.length,
        hash = {}

    if (pLen !== qLen) {
        return false
    } else {
        for (let i = 0; i < pLen; i++) {
            if (!hash[pArr[i]]) {
                hash[pArr[i]] = 0
            }
            hash[pArr[i]] += 1
        }
        for (let i = 0; i < qLen; i++) {
            if (!hash[qArr[i]]) {
                return false
            } else {
                hash[qArr[i]] -= 1
                if (hash[qArr[i]] === 0) {
                    delete hash[qArr[i]]
                }
            }
        }
    }

    return JSON.stringify(hash) === '{}'

}

console.log(isSameTree('anagram', 'nagaram'))
console.log(isSameTree('rat', 'car'))
