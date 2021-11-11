class MagicDictionary {
    private dict: Array<string>

    constructor() {
        this.dict = []
    }

    buildDict(dictionary: string[]): void {
        this.dict = dictionary
    }

    diffCount(firstWord: string, secondWord: string): boolean {
        let count: number = 0
        for (let i = 0; i < firstWord.length; i++) {
            if (firstWord[i] !== secondWord[i]) {
                count++
            }
        }
        return count === 1
    }

    search(searchWord: string): boolean {
        return this.dict.filter(word => word.length === searchWord.length).some(word => this.diffCount(word, searchWord))
    }
}
