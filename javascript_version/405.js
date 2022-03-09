const toHex = (num) => {
    const alpha = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    if (num === 0) {
        return '0'
    } else if (num < 0) {
        num = Math.pow(2, 32) - Math.abs(num)
    }
    let ans = ''
    while (num) {
        ans += alpha[num % 16]
        num = Math.floor(num / 16)
    }
    return ans.split('').reverse().join('')
}
