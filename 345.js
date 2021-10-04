const reverseVowels = s => {
    const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'])
    const vowelIndexes = []
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) vowelIndexes.push(i)
    }
    const vowelIndexesSet = new Set(vowelIndexes)
    let str = ''
    for (let i = 0; i < s.length; i++) {
        str += s[vowelIndexesSet.has(i) ? vowelIndexes.pop() : i]
    }
    return str
}
