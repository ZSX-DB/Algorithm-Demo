const generateParenthesis = (n: number): string[] => {
    const result: string[] = []
    const dfs = (leftSurplus: number, rightSurplus: number, str: string): void => {
        if (str.length === 2 * n) {
            result.push(str)
            return
        }
        if (leftSurplus > 0) {
            dfs(leftSurplus - 1, rightSurplus, `${str}(`)
        }
        if (leftSurplus < rightSurplus) {
            dfs(leftSurplus, rightSurplus - 1, `${str})`)
        }
    }
    dfs(n, n, '')
    return result
}
