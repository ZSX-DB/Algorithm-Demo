const romanToInt = (s: string): number => {
    const record: Map<string, number> = new Map<string, number>([
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ])
    let counter: number = 0
    for (let i = 0; i < s.length; i++) {
        const twoStr = `${s[i]}${s[i + 1]}`
        if (record.has(twoStr)) {
            counter += (record.get(twoStr) ?? 0)
            i++
        } else {
            counter += (record.get(s[i]) ?? 0)
        }
    }
    return counter
}
