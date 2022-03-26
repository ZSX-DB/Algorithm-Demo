// const strStr = (haystack: string, needle: string): number => haystack.indexOf(needle)

const strStr = (haystack: string, needle: string): number => {
    const hLen: number = haystack.length
    const nLen: number = needle.length
    if (hLen < nLen) {
        return -1
    }
    for (let i = 0; i <= (hLen - nLen); i++) {
        if (haystack.substring(i, i + nLen) === needle) {
            return i
        }
    }
    return -1
}
