const isPalindrome = (x: number): boolean => {
    if (x >= 0 && x <= 9) {
        return true
    } else if (x < 0 || x % 10 === 0) {
        return false
    }
    let rs: number = 0
    while (rs < x) {
        rs = rs * 10 + x % 10
        x = Math.floor(x / 10)
    }
    return x === rs || x === Math.floor(rs / 10)
}

console.log(isPalindrome(98789))
