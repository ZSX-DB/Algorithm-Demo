// const maxIceCream = (costs, coins) => {
//     costs.sort((x, y) => x - y)
//     let count = 0
//     for (const cost of costs) {
//         if (coins < cost) break
//         coins -= cost
//         count++
//     }
//     return count
// }

const maxIceCream = (costs, coins) => {
    const flags = []
    for (const cost of costs) {
        const flag = flags[cost]
        flags[cost] = (flag ? flag + 1 : 1)
    }
    let count = 0
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] === undefined) continue
        if (coins < i) break
        const curCount = Math.min(flags[i], Math.floor(coins / i))
        count += curCount
        coins -= curCount * i
    }
    return count
}


console.log(maxIceCream([1, 3, 2, 4, 1], 7))
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5))
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20))


