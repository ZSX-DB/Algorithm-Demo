// 允许一组为奇数，其余的奇数字符串必须减去一个字符，偶数都可以组
const longestPalindrome = s => {
    const getSum = nums => nums.reduce((sum, num) => sum + num, 0)
    const collect = [...s.split('').reduce((map, ch) => map.set(ch, (map.get(ch) || 0) + 1), new Map()).values()]
    const odds = collect.filter(num => num % 2 === 1)
    const evens = collect.filter(num => num % 2 === 0)
    return getSum(evens) + (odds.length ? getSum(odds.map(odd => odd - 1)) + 1 : 0)
}


console.log(longestPalindrome('abc'))
console.log(longestPalindrome('abcb'))
console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('bb'))
console.log(longestPalindrome('bccc'))
console.log(longestPalindrome('bbbaaaa'))
