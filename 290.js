const wordPattern = (pattern, s) => {
    s = s.split(' ')
    if (pattern.length !== s.length) return false
    const pMap = new Map()
    const sMap = new Map()
    for (let i = 0; i < pattern.length; i++) {
        if ((pMap.has(pattern[i]) && pMap.get(pattern[i]) !== s[i]) || (sMap.has(s[i]) && sMap.get(s[i]) !== pattern[i])) return false
        pMap.set(pattern[i], s[i])
        sMap.set(s[i], pattern[i])
    }
    return true
}

console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('abba', 'dog dog dog dog'))
