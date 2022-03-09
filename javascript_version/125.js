const isPalindrome = s => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return s === s.split('').reverse().join('')
}

// const isPalindrome = s => {
//     s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
//     let left = 0
//     let right = s.length - 1
//     while (left < right) {
//         if (s[left] !== s[right]) return false
//         left++
//         right--
//     }
//     return true
// }

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
