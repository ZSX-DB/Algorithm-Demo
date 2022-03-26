const repeatedStringMatch = (a: string, b: string): number => {
    const handleThan = (str: string): -1 | 1 | 2 => str.includes(b) ? 1 : ((str + a).includes(b) ? 2 : -1)
    if (a.length >= b.length) {
        return handleThan(a)
    }
    const mod: number = Math.ceil(b.length / a.length)
    const str: string = new Array<string>(mod).fill(a).join('')
    const result = handleThan(str)
    return result === -1 ? -1 : mod + result - 1
}
