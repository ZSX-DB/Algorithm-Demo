const reverseStr = (s, k) => {
    const strList = []
    let flag = true
    for (let i = 0; i < s.length; i += k) {
        strList.push(flag ? [...s.substring(i, i + k)].reverse().join('') : s.substring(i, i + k))
        flag = !flag
    }
    return strList.join('')
}

console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcdefg', 3))
console.log(reverseStr('abcd', 2))
