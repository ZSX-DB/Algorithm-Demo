const shoppingOffers = (price: number[], special: number[][], needs: number[]): number => {
    const memo: Map<number[], number> = new Map()
    const len: number = price.length
    // 符合条件的礼包
    const filterSpecial: number[][] = special.filter(item => {
        for (let i = 0; i < len; i++) {
            if (needs[i] < item[i]) {
                return false
            }
        }
        return item.reduce((pre, cur, index) => pre + (price[index] || 0) * cur, 0) > item[len]
    })
    const dfs = (curNeeds: number[], filterSpecial: number[][]) => {
        if (memo.has(curNeeds) === false) {
            let minPrice = price.reduce((pre, cur, index) => pre + cur * curNeeds[index], 0)
            for (const curSpecial of filterSpecial) {
                const specialPrice = curSpecial[len]
                const nextNeeds = []
                for (let i = 0; i < len; i++) {
                    if (curSpecial[i] > curNeeds[i]) {
                        break
                    }
                    nextNeeds.push(curNeeds[i] - curSpecial[i])
                }
                if (nextNeeds.length === len) {
                    minPrice = Math.min(minPrice, dfs(nextNeeds, filterSpecial) + specialPrice)
                }
            }
            memo.set(curNeeds, minPrice)
        }
        return memo.get(curNeeds)
    }
    return dfs(needs, filterSpecial)
}

console.log(shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2]))
