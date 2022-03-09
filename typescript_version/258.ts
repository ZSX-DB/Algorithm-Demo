const addDigits = (num: number): number => {
    while (num >= 10) {
        let sum: number = 0
        while (num > 0) {
            const tmp = num % 10
            sum += tmp
            num = (num - tmp) / 10
        }
        num = sum
    }
    return num
}
