// const findWords = (words: string[]): string[] => {
//     const firstRow: Set<string> = new Set<string>(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'])
//     const secondRow: Set<string> = new Set<string>(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'])
//     const thirdRow: Set<string> = new Set<string>(['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'])
//     const isSingleWord = (word: string): boolean => {
//         const row: Set<string> = [firstRow, secondRow, thirdRow].find(row => row.has(word[0]))
//         for (const letter of word) {
//             if (row.has(letter) === false) {
//                 return false
//             }
//         }
//         return true
//     }
//     return words.filter(isSingleWord)
// }

const findWords = (words: string[]): string[] =>
    words.filter((word: string): boolean => {
        const row: Set<string> = [
            new Set<string>(`qwertyuiop${'qwertyuiop'.toUpperCase()}`),
            new Set<string>(`asdfghjkl${'asdfghjkl'.toUpperCase()}`),
            new Set<string>(`zxcvbnm${'zxcvbnm'.toUpperCase()}`)]
            .find(row => row.has(word[0]))
        for (const letter of word) {
            if (row.has(letter) === false) {
                return false
            }
        }
        return true
    })

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
console.log(findWords(["omk"]))
console.log(findWords(["adsdf", "sfd"]))

