const checkRecord = s => {
    if (s.includes('LLL')) {
        return false
    }
    let ACount = 0
    for (const ch of s) {
        if (ch === 'A') {
            ACount++
        }
    }
    return ACount < 2
}

console.log(checkRecord('PPALLP'))
console.log(checkRecord('PPALLL'))
