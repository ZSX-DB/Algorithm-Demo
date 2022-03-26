const lengthOfLongestSubstring = (s: string): number => {
    const slideWindow: string[] = []
    let maxlength: number = 0
    for (const ch of s) {
        const index: number = slideWindow.indexOf(ch)
        slideWindow.splice(0, index + 1)
        slideWindow.push(ch)
        maxlength = Math.max(maxlength, slideWindow.length)
    }
    return maxlength
}
