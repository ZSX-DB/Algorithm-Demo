// const canPlaceFlowers = (flowerbed, n) => {
//     const ans = []
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (flowerbed[i] === 1) flowerbed[i] = flowerbed[i - 1] = flowerbed[i + 1] = null
//     }
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (flowerbed[i] === 0) {
//             let num = 0
//             while (flowerbed[i] !== null && i < flowerbed.length) {
//                 i++
//                 num++
//             }
//             ans.push(num)
//         }
//     }
//     return (ans.length === 0 ? 0 : ans.map(item => Math.ceil(item / 2)).reduce((pre, cur) => pre + cur)) >= n
// }

const canPlaceFlowers = (flowerbed, n) => {
    flowerbed.unshift(0)
    flowerbed.push(0)
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i-1] ===0 &&flowerbed[i] === 0 && flowerbed[i+1] ===0 ){
            flowerbed[i] = 1
            n--
        }
    }
    return n <= 0
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([0, 0, 0, 0, 0, 0], 3))
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 0, 1], 3))
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1))

/**
 * num can
 * 1 1
 * 2 1
 * 3 2
 * 4 2
 * 5 3
 * 6 3
 */