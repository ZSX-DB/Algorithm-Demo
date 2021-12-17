const intToRoman = (num: number): string => {
    const amounts: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const signs: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let result: string = ''
    for (let i = 0; i < 13; i++) {
        while (num >= amounts[i]) {
            result += signs[i]
            num -= amounts[i]
        }
    }
    return result
}


console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))
