// const distributeCandies = (candyType: number[]): number => {
//     const halfLen = candyType.length / 2
//     const kind = new Set(candyType).size
//     return halfLen >= kind ? kind : halfLen
// }

const distributeCandies = (candyType: number[]): number => Math.min(candyType.length / 2, new Set(candyType).size)

console.log(distributeCandies([1, 2, 3, 3]))
