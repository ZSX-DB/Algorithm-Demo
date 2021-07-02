const maxIceCream = (costs, coins) => {
    costs.sort((x, y) => x - y)
    let count = 0
    for (const cost of costs) {
        if (coins < cost) break
        coins -= cost
        count++
    }
    return count
}

// s

console.log(maxIceCream([1, 3, 2, 4, 1], 7))
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5))
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20))


