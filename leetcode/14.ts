const longestCommonPrefix = (strs: string[]): string => {
    strs.sort((x, y) => x.length - y.length)
    const baseStr = strs[0]
    let prefix: string = ''
    for (let i = 0; i < baseStr.length; i++) {
        const sliceStr = baseStr.slice(0, i + 1)
        if (strs.every(str => str.startsWith(sliceStr))) {
            prefix += baseStr[i]
        } else {
            break
        }
    }
    return prefix
}
