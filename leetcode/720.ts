const longestWord = (words: string[]): string => {
    const wordsMap: Map<string, boolean> = new Map<string, boolean>()
    const compare = (word1: string, word2: string): string => [word1, word2].sort((x, y) => x.localeCompare(y))[0]
    words.sort((x, y) => x.length - y.length).forEach(word => {
        wordsMap.set(word, word.length === 1)
    })
    let target: string = words.find(word => word.length === 1) ?? ''
    for (let i = 0; i < words.length; i++) {
        const currWord = words[i]
        const testWord = currWord.slice(0, currWord.length - 1)
        if (!wordsMap.get(testWord)) {
            continue
        } else if (currWord.length > target.length) {
            target = currWord
        } else if (currWord.length === target.length) {
            target = compare(currWord, target)
        }
        wordsMap.set(currWord, true)
    }
    return target
}
