const letterCombinations = (digits: string): string[] => {
    const record: Map<string, string[]> = new Map<string, string[]>([
        ['', []], ['2', ['a', 'b', 'c']], ['3', ['d', 'e', 'f']], ['4', ['g', 'h', 'i']], ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']], ['7', ['p', 'q', 'r', 's']], ['8', ['t', 'u', 'v']], ['9', ['w', 'x', 'y', 'z']]
    ])
    const getStrIN = (strList1: string[], strList2: string[]): string[] => {
        const result: string[] = []
        for (const s1 of strList1) {
            for (const s2 of strList2) {
                result.push(s1 + s2)
            }
        }
        return result
    }
    return digits.length <= 1 ? record.get(digits) : getStrIN(record.get(digits[0]), letterCombinations(digits.substring(1)))
}

console.log(letterCombinations('2'))
console.log(letterCombinations('23'))
console.log(letterCombinations('234'))
