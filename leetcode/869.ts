const reorderedPowerOf2 = (n: number): boolean => {
    const sortNumStr = (numStr: string): string => numStr.split('').map(Number).sort((x, y) => y - x).join('')
    const nStr = sortNumStr(n.toString())
    const max = Number(nStr)
    let base = 1
    while (base <= max) {
        const baseStr = base.toString()
        if (baseStr.length === nStr.length && sortNumStr(baseStr) === nStr) {
            return true
        }
        base *= 2
    }
    return false
}

console.log(reorderedPowerOf2(10))
console.log(reorderedPowerOf2(46))
