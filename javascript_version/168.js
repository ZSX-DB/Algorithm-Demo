const convertToTitle = columnNumber => {
    const mod26 = num => {
        if (num <= 26) return [num]
        if (num % 26 === 0) return [...mod26((num / 26) - 1), 26]
        return [...mod26(Math.floor(num / 26)), num % 26]
    }
    return mod26(columnNumber).reduce((pre, cur) => pre + String.fromCodePoint(cur + 64), '')
}

console.log(convertToTitle(28))
console.log(convertToTitle(701))
console.log(convertToTitle(269))
console.log(convertToTitle(7001))
console.log(convertToTitle(52))
