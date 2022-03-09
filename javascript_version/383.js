const canConstruct = (ransomNote, magazine) => {
    if (ransomNote.length > magazine.length) return false
    const record = new Map()
    magazine.split('').forEach(ch => {
        record.set(ch, (record.get(ch) || 0) + 1)
    })
    for (const ch of ransomNote) {
        if (record.has(ch) === false || record.get(ch) - 1 < 0) return false
        record.set(ch, record.get(ch) - 1)
    }
    return true
}

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
console.log(canConstruct('aab', 'baa'))
