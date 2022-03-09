const titleToNumber = columnTitle => {
    const collect = new Map()
    for (let i = 1; i <= 26; i++) {
        collect.set(String.fromCharCode(i + 64), i)
    }
    return columnTitle.split('').reverse().map((ch, idx) => collect.get(ch) * (26 ** idx)).reduce((sum, num) => sum + num, 0)
}
