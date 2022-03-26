const licenseKeyFormatting = (s: string, k: number): string => {
    s = s.replace(/-/g, '').toUpperCase()
    const remainder = s.length % k
    const list = []
    if (remainder !== 0) {
        list.push(s.substring(0, remainder))
    }
    for (let i = remainder; i < s.length; i += k) {
        list.push(s.substring(i, i + k))
    }
    return list.join('-')
}

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4))
console.log(licenseKeyFormatting('2-5g-3-J', 2))
