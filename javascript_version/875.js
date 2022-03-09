const minEatingSpeed = (piles, h) => {
    let left = Math.ceil(piles.reduce((pre, cur) => pre + cur, 0) / h)
    let right = Math.max(...piles)
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        let need = 0
        for (const pile of piles) {
            need += Math.ceil(pile / mid)
        }
        need > h ? left = mid + 1 : right = mid
    }
    return left
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))
