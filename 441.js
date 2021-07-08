const arrangeCoins = n => {
    let count = 0
    let c = n
    for (let i = 1; i <= n; i++) {
        c -= i
        if (c < 0) break
        count++
    }
    return count
}

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(9))
console.log(arrangeCoins(10))
