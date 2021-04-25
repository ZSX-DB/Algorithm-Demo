const str1 = 'test'
const str2 = 'tesst'
const str3 = 'tet'

const plusReg = /tes+t/
const multiReg = /tes*t/
const queReg = /tes?t/


// + 号表示必须出现至少一个，匹配 test tesst tessst 等
console.log(str1.replace(plusReg, ''), str2.replace(plusReg, ''), str3.replace(plusReg, ''))
// * 号表示可匹配 0 个或多个
console.log(str1.replace(multiReg, ''), str2.replace(multiReg, ''), str3.replace(multiReg, ''))
// ? 表示可匹配 0 个或 1 个
console.log(str1.replace(queReg, ''), str2.replace(queReg, ''), str3.replace(queReg, ''))
